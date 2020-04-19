$(document).ready(function () {
  var getActiveSlideIndex = function () {
    return $("#productSlider .active").index("#productSlider .carousel-item");
  };
  var slider = function (IndexNumber) {
    $(".slider .image")
      .removeClass("active")
      .eq(IndexNumber)
      .addClass("active");
  };
  slider(getActiveSlideIndex());
  $("#productSlider").on("slid.bs.carousel", function () {
    slider(getActiveSlideIndex());
  });
});
