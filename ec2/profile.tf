resource "aws_iam_role" "ec2_role" {
  name = join("-", ["ec2-role", var.project, var.environment])

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}
EOF

  tags = {
    project     = var.project
    environment = var.environment
  }
}

resource "aws_iam_instance_profile" "ec2_profile" {
  name = join("-", ["ec2-profile", var.project, var.environment])
  role = aws_iam_role.ec2_role.name
  depends_on = [
    aws_iam_role.ec2_role
  ]
}

resource "aws_iam_role_policy" "ec2_policy" {
  name = join("-", ["ec2-policy", var.project, var.environment])
  role = aws_iam_role.ec2_role.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchGetImage",
        "ecr:GetDownloadUrlForLayer"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
  depends_on = [
    aws_iam_role.ec2_role
  ]
}