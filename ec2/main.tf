

resource "aws_instance" "web" {
  ami           = data.aws_ami.amazon_linux_2.id
  instance_type = "t3.micro"

  root_block_device {
    volume_size = 8
  }

  user_data = <<-EOF
    #!/bin/bash
    set -ex
    sudo yum update -y
    sudo amazon-linux-extras install docker -y
    sudo service docker start
    sudo usermod -a -G docker ec2-user
    sudo curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
  EOF

  vpc_security_group_ids = [
    module.ec2_sg.security_group_id,
    module.dev_ssh_sg.security_group_id
  ]
  iam_instance_profile = aws_iam_instance_profile.ec2_profile.name

  tags = {
    project = "hello-world"
  }

  subnet_id = "${tolist(data.aws_subnet_ids.all.ids)[0]}"

  key_name                = "yiyang-key"
  monitoring              = true
  disable_api_termination = false
  ebs_optimized           = true
  depends_on = [
    module.ec2_sg,
    module.dev_ssh_sg,
    aws_iam_instance_profile.ec2_profile,
  ]
}
