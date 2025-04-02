import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  contratos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Contrato" }],
}, { timestamps: true });

export const ClienteModel = mongoose.model("Cliente", ClienteSchema);

