//CONFIG E IMPORTAÇÕES
import { Schema, model, Document } from 'mongoose';
import { TypeStrategyTenis } from '../types/TypeStrategyTenis';

export interface StrategyTenisDocument extends TypeStrategyTenis, Document {}

//ESSE SCHEMA CRIA AUTOMATICAMENTE A TABELA NO BANCO DE DADOS
const modelStrategyTenis: Schema<StrategyTenisDocument> = new Schema<StrategyTenisDocument>(
  {
    STRATEGY_DIFF_SET: {
      type: Number
    },
    STRATEGY_DIFF_POINT: {
      type: Number
    },
    STRATEGY_MULTIPLIER: {
      type: Number
    },
    STRATEGY_ENTRY_VALUE: {
      type: Number,
      required: true
    },
    STRATEGY_STOP_WIN: {
      type: Number
    },
    STRATEGY_STOP_LOSS: {
      type: Number
    },
    STRATEGY_CONFIG: {
      type: Schema.Types.ObjectId,
      ref: 'Config',
      required: true
    }
  },
  { 
    timestamps: true
  }
);

export default model<StrategyTenisDocument>('StrategyTenis', modelStrategyTenis);
