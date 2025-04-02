import mongoose from "mongoose";

const ContratoSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  forma_pago: { type: String, required: true },
  plan_internet: { type: String, required: true },
  fecha_inicio: { type: Date, required: true },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true }
}, { timestamps: true });

export const ContratoModel = mongoose.model("Contrato", ContratoSchema);
