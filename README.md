# treinaweb-adote-um-pet
Imersão TreinaWeb Multistack #3 - Adote um Pet

## Pastas

### adote-um-pet
Servidor em Python + django + SQLite usando **virtual environment**. Para executar digite:
1. `source .venv/bin/activate`
2. `python manage.py runserver`

Pare o servidor usando `Ctrl-C` e saia do ambiente virtual digitando:
`source .venv/bin/deactivate`

### pets
Cliente em React. Para executar digite:
`next run dev`

Acesse o link fornecido.

Pare o servidor usando `Ctrl-C`.

#### URLS

1. `/`: mostra os pets para adoção
2. Administrativo:
  - `/pets/cadastrar`: cadastrar novos pets para adoção virtual
  - `/pets/relatorio`: listagem dos pets adotados com e-mail do doador e o valor
