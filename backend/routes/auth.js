const express = require("express");
const router = express.Router();
const Events = require("../models/Events");
const { body, validationResult } = require("express-validator");

