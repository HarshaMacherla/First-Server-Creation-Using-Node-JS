const getSuccess = (req, res, next) => {
  res.render("success", {
    pageTitle: "Form Success",
    path: "/success",
  });
};

module.exports = { getSuccess };
