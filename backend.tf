# The block below configures Terraform to use the 'remote' backend with Terraform Cloud.
# For more information, see https://www.terraform.io/docs/backends/types/remote.html
terraform {
  backend "s3" {
    bucket = "terraform-dev-state2"
    key    = "airbyte/ec2/yiyang/terraform.tfstate"
    region = "us-west-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.6"
    }
  }

  required_version = ">= 1.1.0"
}
