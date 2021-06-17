var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
window.onload = function () {
  document.getElementById("d1").innerHTML = Object.keys(student);
  delete student.rollno;
  document.getElementById("d2").innerHTML = Object.keys(student);
  objectLength = Object.keys(student).length;
  document.getElementById("d3").innerHTML = objectLength;
  document.getElementById("d4").innerHTML = library[0].readingStatus;
  document.getElementById("d5").innerHTML = library[1].readingStatus;
  document.getElementById("d6").innerHTML = library[2].readingStatus;
};
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
