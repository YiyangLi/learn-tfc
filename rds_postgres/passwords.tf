resource "random_password" "eng" {
  length  = 16
  special = false
}

resource "random_password" "readonly" {
  length  = 16
  special = false
}

resource "vault_generic_secret" "db_passwords" {
  path = "secret/${var.project}/db_passwords"

  data_json = jsonencode(
    zipmap(
      compact([
        "db_address",
        "readonly_user",
        "readonly_password",
        "superuser",
        "su_password",
        "eng_user",
        "eng_password"
      ]),
      compact([
        module.rds.db_instance_address,
        "readonly",
        random_password.readonly.result,
        module.rds.db_instance_username,
        module.rds.db_instance_password,
        "eng",
        random_password.eng.result,
      ]),
    )
  )

  depends_on = [
    random_password.eng,
    random_password.readonly,
    module.rds,
  ]
}


