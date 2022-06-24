locals {
  environment = "dev"
  user        = "yiyang"
  ec2_key     = join("-", [local.user, "abbey-labs"])
}
module "airbyte" {
  source        = "./ec2"
  project       = join("-", [local.user, "airbyte"])
  instance_type = "c5.2xlarge"
  ec2_key       = local.ec2_key
  environment   = local.environment
  // it's NOT behind a VPC, please don't run customers data here
  ingress_with_cidr_blocks = [{
      from_port   = 8000
      to_port     = 8000
      protocol    = "tcp"
      description = "airbyte webapp"
      cidr_blocks = "0.0.0.0/0"
    }, 
    {
      from_port   = 8001
      to_port     = 8001
      protocol    = "tcp"
      description = "airbyte api"
      cidr_blocks = "0.0.0.0/0"
    },
    {
      from_port   = 5432
      to_port     = 5432
      protocol    = "tcp"
      description = "airbyte postgres db"
      cidr_blocks = "0.0.0.0/0"
    }
  ]
}

module "metabase" {
  source        = "./ec2"
  project       = join("-", [local.user, "metabase"])
  instance_type = "m5.2xlarge"
  ec2_key       = local.ec2_key
  environment   = local.environment
  // dev only, it's NOT behind VPC, please don't run customers' data here
  ingress_with_cidr_blocks = [{
      from_port   = 3000
      to_port     = 3000
      protocol    = "tcp"
      description = "the metabase server"
      cidr_blocks = "0.0.0.0/0"
    }
  ]
}

module "vault" {
  source        = "./ec2"
  project       = join("-", [local.user, "vault"])
  instance_type = "t3.micro"
  ec2_key       = local.ec2_key
  environment   = local.environment
  // it's NOT behind a VPC, please don't put customers' credentails here
  ingress_with_cidr_blocks = [{
      from_port   = 8200
      to_port     = 8200
      protocol    = "tcp"
      description = "the vault server (ideally behind a vpc)"
      cidr_blocks = "0.0.0.0/0"
    }
  ]
}

module "metabase_postgres" {
  source = "./rds_postgres"

  environment              = local.environment
  database_name            = "metabase"
  project                  = join("-", [local.user, "metabase"])
  ingress_with_cidr_blocks = []
}