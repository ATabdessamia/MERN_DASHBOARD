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

const getAllHand = (Model) =>
  catchAsync(async (req, res) => {
    const keyword = req.query.keyword
      ? {
          firstName: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const doc = await Model.find({ ...keyword });

    res.status(200).json({
      status: "success",
      resultes: doc.length,
      data: {
        data: doc,
      },
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
