

resource "aws_instance" "ec2" {
  ami           = data.aws_ami.amazon_linux_2.id
  instance_type = var.instance_type

  root_block_device {
    volume_size = 32
  }

  user_data = <<-EOF
    #!/bin/bash
    set -ex
    sudo yum update -y
    sudo amazon-linux-extras install docker -y
    sudo service docker start
    sudo usermod -a -G docker $USER
    sudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
  EOF

  vpc_security_group_ids = [
    module.ec2_sg.security_group_id,
    module.dev_ssh_sg.security_group_id
  ]
  iam_instance_profile = aws_iam_instance_profile.ec2_profile.name

  tags = {
    project     = var.project
    environment = var.environment
  }

  subnet_id = tolist(data.aws_subnets.all.ids)[0]

  key_name                = var.ec2_key
  monitoring              = true
  disable_api_termination = false
  ebs_optimized           = true
  depends_on = [
    module.ec2_sg,
    module.dev_ssh_sg,
    aws_iam_instance_profile.ec2_profile,
  ]
}

