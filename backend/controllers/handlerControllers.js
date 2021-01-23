import catchAsync from "express-async-handler";

const deleteHand = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.findByIdAndRemove(req.params.id);

    if (!doc) {
      throw Error("Not found Id");
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

const updateHand = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!doc) {
      throw Error("Not found Id");
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const createHand = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const getAllHand = (Model, sortValue) =>
  catchAsync(async (req, res) => {
    const page = +req.query.page || 1;
    const limit = 4;
    const skip = (page - 1) * limit;
    const keyword = req.query.keyword
      ? {
          firstName: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const doc = await Model.find({ ...keyword })
      .sort(sortValue)
      .skip(skip)
      .limit(limit);

    const numModel = await Model.countDocuments();
    if (req.query.page) {
      if (skip >= numModel) throw new Error("This page does not exist");
    }

    res.status(200).json({
      data: { resultes: numModel, data: doc },
    });
  });

const getHand = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      throw Error("Not found Id");
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export { getAllHand, getHand, createHand, deleteHand, updateHand };
