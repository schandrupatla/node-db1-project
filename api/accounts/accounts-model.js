const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("accounts");
};

const getById = async (id) => {
  // DO YOUR MAGIC
  const record = await db("accounts").where("id", id).first();
  return record;
};

const create = async (account) => {
  // DO YOUR MAGIC
  const [id] = await db("accounts").insert({
    name: account.name.trim(),
    budget: account.budget,
  });
  const newAccount = await getById(id);
  return newAccount;
};

const updateById = async (id, account) => {
  const numOfRecordsUpdated = await db("accounts")
    .where("id", id)
    .update(account);
  const updatedAccount = getById(id);
  return updatedAccount;
};

const deleteById = async (id) => {
  const deletedAccount = getById(id);
  const numOfRecordsDeleted = await db("accounts").where("id", id).del();

  return deletedAccount;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
