# gradesource-uploader-js

### Purpose:
This script is for uploading homework/exam grades to [gradesource](http://gradesource.com).


### How to run:

1. Compose the students' score into a json object like {"A12341234" : "10.0", "A43214321" : "9.5", ... } and store it in the variable "scores". 
   You might use the python script "csv_to_json.py" for this purpose. You can run it like:
```
python csv_to_json.py sample_input.txt
```
2. In the webpage of uploading scores, e.g. https://www.gradesource.com/editscores1.asp?id=xxxxxx,
   open the browser console (in chrome, you can right click -> inspect elements -> choose the console tab).
3. Copy and Paste the line "var scores = { ... };" and the script (upload.js) in the console.
4. Run the script with the scores variable. It will print out a list of student IDs that are in the input but not in gradesource.
