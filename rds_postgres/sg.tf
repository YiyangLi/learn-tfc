locals {
  sg_tags = {
    project     = join("-", [var.project, "sg"])
    environment = var.environment
  }
}

module "rds_sg" {
  source = "terraform-aws-modules/security-group/aws"

  name        = join("-", ["rds-sg", var.environment, var.project])
  description = "Security group for rds"
  vpc_id      = data.aws_vpc.default.id

  ingress_with_cidr_blocks = concat([
    {
      from_port   = 5432
      to_port     = 5432
      protocol    = "tcp"
      description = "Postgres access from all IPs"
      cidr_blocks = "0.0.0.0/0"
    }
  ], var.ingress_with_cidr_blocks)

  tags = local.sg_tags
}
