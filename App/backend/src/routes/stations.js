const express = require('express');
const router = express.Router();
const stationController = require('../controller/stationContoller');
const stationRequestDto = require('./dto/stationRecordRequestDto');

/**
 * @swagger
 * /stations:
 *  get:
 *      summary: Fetches all stations
 *      responses:
 *          200:
 *              description: list of stations
 */
router.get('/', stationController.readStation);

/**
 * @swagger
 * /stations/{id}:
 *      get:
 *          summary: get station by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single station
 *
 */
router.get('/:id', stationController.readStationById);

/**
 * @swagger
 * /stations:
 *  post:
 *      summary: create a new weather station
 *      requestBody:
 *        content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   required: false
 *                   properties:
 *                      city:
 *                          type: string
 *                          example: Budapest
 *                      position:
 *                          type: string
 *                          example: -48 23 105
 *                      temperature:
 *                          type: float
 *                          example: 15
 *                      humidity:
 *                          type: int
 *                          example: 65
 *                      windSpeed:
 *                          type: float
 *                          example: 23.6
 *                      windDirection:
 *                          type: string
 *                          example: north
 *                      pressure:
 *                          type: float
 *                          example: 1008
 *      responses:
 *          200:
 *              description: success
 *          400:
 *              description: problem
 */
router.post('/', stationRequestDto, stationController.createStation);

/**
 * @swagger
 * /stations/{id}:
 *  delete:
 *      summary: deletes a station by ID
 *      parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 */
router.delete('/:id', stationController.deleteStation);

module.exports = router;
