locals {
  sg_tags = {
    project     = join("-", [var.project, "sg"])
    environment = var.environment
  }
}
module "dev_ssh_sg" {
  source = "terraform-aws-modules/security-group/aws"

  name        = join("-", ["ec2-sg-ssh", var.project, var.environment])
  description = "Security group for ec2_sg"
  vpc_id      = data.aws_vpc.default.id

  ingress_cidr_blocks = ["0.0.0.0/0"]
  ingress_rules       = ["ssh-tcp"]

  tags = local.sg_tags
}

module "ec2_sg" {
  source = "terraform-aws-modules/security-group/aws"

  name        = join("-", ["ec2-sg", var.project, var.environment])
  description = "Security group for ec2_sg"
  vpc_id      = data.aws_vpc.default.id

  ingress_cidr_blocks      = ["0.0.0.0/0"]
  ingress_rules            = ["http-80-tcp", "https-443-tcp","all-icmp"]
  egress_rules             = ["all-all"]
  ingress_with_cidr_blocks = var.ingress_with_cidr_blocks

  tags = local.sg_tags
}