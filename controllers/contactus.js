const getContact = (req, res, next) => {
  res.render("contactus", {
    pageTitle: "Contact Us",
    path: "/contactus",
    formsCSS: true,
  });
};

module.exports = { getContact };
