// Configuration Model
const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');
const uuid = require('uuid')


class Configuration extends BaseModel {
  constructor() {
    super('Configuration', {
      animateur: Joi.boolean().required(),
      animateurImagePath: Joi.string().required(),
      animation: Joi.boolean().required(),
      animationSpeed: Joi.string().required(),
      sliderPosition: Joi.number().precision(2).required(),
      duration: Joi.string().required(),
      contraste: Joi.boolean().required(),
      jeuCouleur: Joi.number().required(),
      police: Joi.string().required()
    });
  }

  create(obj = {}) {
    const defaults = {
      animateur: false,
      animateurImagePath: '',
      animation: false,
      animationSpeed: 'normal',
      sliderPosition: 0,
      duration: '00:00:00',
      contraste: false,
      jeuCouleur: -1,
      police: 'Nunito'
    };
    const newConfig = { ...defaults, ...obj, id: uuid.v4() };
    const { error } = Joi.validate(newConfig, this.schema);
    if (error) throw new ValidationError(`Create Configuration Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error);
    this.items.push(newConfig);
    this.save();
    return newConfig;
  }

  deleteAll = function () {
    this.items = [];
    this.save();
  };

  
}


module.exports = new Configuration();
