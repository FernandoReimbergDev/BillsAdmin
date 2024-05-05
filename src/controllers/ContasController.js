const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class ContasController {
  async create(req, res) {
    const { title, description, value, due_date } = req.body;
    const { user_id } = req.params;

    const [note_id] = await knex("contas").insert({
      title,
      description,
      value,
      due_date,
      user_id,
    });

    res.status(201).json();
  }

  async show(req, res) {
    const { id } = req.params;

    const contas = await knex("contas").where({ id }).first();

    return res.json(contas)
  }

  async delete(req, res) {
    const { id } = req.params;
    await knex("contas").where({ id }).delete();
    return res.json();
  }

  async index(req, res) {
    const { title, user_id} = req.query;

    let contas;

    if (contas) {
      const filterContas = title.split(",").map((title) => title.trim());

      contas = await knex("contas")
        .select(["contas.id", "contas.title", "contas.description", "contas.value", "contas.due_date", "contas.user_id"])
        .where("contas.user_id", user_id)
        .whereLike("contas.title", `%${title}%`)
        .whereIn("name", filterContas)
        .innerJoin("contas", "users.id", "contas.user_id")
        .orderBy("contas.title");
    } else {
      contas = await knex("contas")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }


    return res.json(contas);
  }

  async update(req, res){
    const {title, description, value, due_date} = req.body;
    const { id } = req.params;

    const updatedCount = await knex("contas")
      .where({ id }) 
      .update({
        title,
        description,
        value,
        due_date
      });

    if (updatedCount === 0) {
      throw new AppError("Conta não encontrada");
    }

    return res.json()

  }
}

module.exports = ContasController;
