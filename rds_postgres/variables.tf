variable "ingress_with_cidr_blocks" {
  type = list(object({
    from_port   = number
    to_port     = number
    protocol    = string
    description = string
    cidr_blocks = string
  }))
}

variable "environment" {
  type = string
}

variable "project" {
  type = string
}

variable "database_name" {
  type = string
}