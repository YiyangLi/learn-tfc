resource "aws_iam_role" "ec2_role" {
  name = "ec2_role_hello_world"

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
    project = "hello-world"
  }
}

resource "aws_iam_instance_profile" "ec2_profile" {
  name = "ec2_profile_hello_world"
  role = aws_iam_role.ec2_role.name
  depends_on = [
    aws_iam_role.ec2_role
  ]
}

resource "aws_iam_role_policy" "ec2_policy" {
  name = "ec2_policy"
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