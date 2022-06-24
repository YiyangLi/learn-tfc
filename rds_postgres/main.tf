module "db" {
  source = "terraform-aws-modules/rds/aws"
  
  engine                = "postgres"
  engine_version        = "14.1"
  family                = "postgres14"
  major_engine_version  = "14"
  instance_class        = "db.m5.xlarge"
  availability_zone     = "us-west-1a"
  allocated_storage     = 100
  max_allocated_storage = 200

  // turn it off after vpc is done
  publicly_accessible = true
  db_name             = var.database_name
  identifier          = var.database_name
  port                = 5432
  username            = "superuser"
  password            = random_password.superuser.result
  
  multi_az               = false
  create_db_subnet_group = true
  db_subnet_group_name   = join("-", ["rds", var.environment, var.database_name, "subnet-group"])
  subnet_ids             = tolist(data.aws_subnet_ids.all.ids)
  vpc_security_group_ids = [module.rds_sg.security_group_id]

  maintenance_window          = "Mon:00:00-Mon:03:00"
  backup_window               = "03:00-06:00"

  create_cloudwatch_log_group     = true
  enabled_cloudwatch_logs_exports = ["postgresql", "upgrade"]

  // The days to retain backups for is 3 days
  backup_retention_period = 3
  skip_final_snapshot     = true
  deletion_protection     = false

  // The amount of time in days to retain Performance Insights data is 7 days
  performance_insights_enabled             = true
  performance_insights_retention_period    = 7

  create_monitoring_role      = true
  monitoring_interval         = 60
  monitoring_role_name        = join("-", ["rds", var.environment, var.database_name, "monitoring-role"])
  monitoring_role_description = "Monitoring role for the rds ${var.database_name} in ${var.environment}"

  parameters = [
    {
      name  = "autovacuum"
      value = 1
    },
    {
      name  = "client_encoding"
      value = "utf8"
    }
  ]

  depends_on = [
    module.rds_sg,
    random_password.superuser,
    random_password.readonly,
    random_password.eng
  ]
}