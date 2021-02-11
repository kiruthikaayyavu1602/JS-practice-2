 
 //1.
  var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
document.getElementById("demo").innerHTML = Object.getOwnPropertyNames(student);
//2.
var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12
};
document.getElementById("demo1").innerHTML = student.name + "," + delete student.rollno + "," + student.sclass;
//3.
var test = { 
firstname : "Mary", 
lastname : "John", 
id : 20 }; 
document.getElementById("demo2").innerHTML =(Object.keys(test).length);
//5.
function Cylinder(cyl_height, cyl_radius) {
  
return cyl_height * Math.PI * cyl_radius * cyl_radius;
};
var cyl = Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
document.getElementById("demo3").innerHTML =(cyl.toFixed(4));

//6.
function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}
function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
	return arr;
}
document.getElementById("demo4").innerHTML =(bubble_Sort([6,4,0, 3,-2,1]));


//8.
var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
   displayLibrary();

   function displayLibrary() {
    document.getElementById("demo6").innerHTML =
    library[0].title  + " " + library[0].author + " " + library[0].libraryID + "<br>" +
    library[1].title  + " " + library[1].author + " " + library[1].libraryID + "<br>" +
    library[2].title  + " " + library[2].author + " " + library[2].libraryID ;
  }
   
   function myFunction1() {
  library.sort(function(a, b){return a.libraryID - b.libraryID});
  displayLibrary();
}




//7.

String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};


document.getElementById("demo5").innerHTML =("dog".sub_String());  

//4.
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   for (var i=0; i<library.length; i++){
	if (library[i].readingStatus==true){
	alert(library[i].title + library[i].author)
	}
	
	else {
		alert( library[i].title + library[i].author)
	}
	
}

