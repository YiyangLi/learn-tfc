resource "random_password" "eng" {
  length  = 16
  special = false
}

resource "random_password" "readonly" {
  length  = 16
  special = false
}

resource "random_password" "superuser" {
  length  = 16
  special = false
}


