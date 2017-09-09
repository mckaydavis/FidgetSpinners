'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StatuteSchema = new Schema({
  url:{ type: String, default: null },
  year:{ type: String, default: null },
  division:{ type: String, default: null },
  division_text:{ type: String, default: null },
  volume:{ type: String, default: null },
  title:{ type: String, default: null },
  title_text:{ type: String, default: null },
  subtitle:{ type: String, default: null },
  subtitle_text:{ type: String, default: null },
  chapter:{ type: String, default: null },
  chapter_text:{ type: String, default: null },
  article:{ type: String, default: null },
  article_text:{ type: String, default: null },
  part:{ type: String, default: null }, 
  part_text:{ type: String, default: null },
  subpart:{ type: String, default: null },
  section:{ type: String, default: null },
  section_text:{ type: String, default: null },
  text:{ type: [String], default: null },
  refs:{ type: [String], default: null }
});

module.exports = mongoose.model('Statute', StatuteSchema, 'hrs-data');