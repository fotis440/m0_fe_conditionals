```javascript
var goodDrivingRecord = true;
var age = 24;
if (age >= 25 && goodDrivingRecord == true) {
  console.log("You should get a discount on the car rental!");
} else 
if (age >= 25 || goodDrivingRecord == true) {
  console.log("You should pay full price on the car rental!");
} else
if (age < 25 && goodDrivingRecord == false) {
  console.log("You need to have someone else sign for the rental!");
}

```
