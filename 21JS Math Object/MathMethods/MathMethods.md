# Math.round() Method

==> Math.round() returns the nearest integer.

```js
let number = 45.4567;
console.log(Math.round(number)); //45
console.log(Math.round(4.6)); //5
console.log(Math.round(4.4)); // 4
```

# Math.ceil() Method
=> Math.ceil(x) returns the value of x rounded up to its nearest integer:

```js
console.log(Math.ceil(4.9)); //5
console.log(Math.ceil(4.7)); //5
console.log(Math.ceil(4.4)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.ceil(-4.2)); //-4
console.log(Math.ceil(4.00001)); //5
```

# Math.floor() Method:
=>Math.floor(x) returns the value of x rounded down to its nearest integer.

```js
console.log(Math.floor(4.9)); //4
console.log(Math.floor(4.7)); //4
console.log(Math.floor(4.4)); //4
console.log(Math.floor(4.2)); //4
console.log(Math.floor(-4.2)); // -5
```

# Math.trunc() Method:
=> Math.trunc(x) returns the integer part of x:

```js
console.log(Math.trunc(4.9)); //4
console.log(Math.trunc(4.7)); //4
console.log(Math.trunc(4.4)); //4
console.log(Math.trunc(4.2)); //4
console.log(Math.trunc(-4.2)); //-4
```

# Math.sign() Method:
=> Math.sign(x) returns if x is negative ,null or positive

```js
console.log(Math.sign(4)); //1
console.log(Math.sign(-4)); //-1
console.log(Math.sign(0)); //0
console.log(Math.sign(33542)); //1
console.log(Math.sign(-78767)); //-1
```

# Math.pow() Method:
=>Math.pow(x,y) returns the value of x to the power y:

```js
console.log(Math.pow(2, 5)); //32
console.log(Math.pow(2, 9)); //512
console.log(Math.pow(2, 10)); //1024
console.log(Math.pow(2, 11)); //2048
```

# Math.sqrt() Method:
=> Math.sqrt(x) returns the square of x;

```js
console.log(Math.sqrt(144)); //12
console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(36)); //6
console.log(Math.sqrt(49)); //7
console.log(Math.sqrt(64)); //8
```

# Math.abs() Method:
=> Math.abs(x) returns the absolute (positive) value of x:

```js
console.log(Math.abs(-567)); //567
console.log(Math.abs(-5)); //5
console.log(Math.abs(-45.53)); //45.53
```

# Math.sin() Method:
=> Math.sin(x) returns the sine (a value between -1 and 1) of the angle x(given in radians)

=> if we want to use degree instead of radians, we have to convert degree to radian:

=> Angle in radian= Angle in degrees*PI/180

```js
console.log(Math.sin(Math.PI / 2)); //1 => Angle in Radian
console.log(Math.sin((90 * Math.PI) / 180)); //1 =>Angle in Degree
```

# Math.cos() Method:
=> Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x(given in radians)

=> if we want to use degree instead of radians, we have to convert degree to radian:

=> Angle in radian= Angle in degrees*PI/180

```js
console.log(Math.cos(0)); //1
console.log(Math.cos((0 * Math.PI) / 180)); //1

```

# Math.min() and Math.max() Method
=> Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.

```js
console.log(Math.min(45, 29, 78, 35, 90, 23, 65)); //23

console.log(Math.max(45, 29, 78, 35, 90, 23, 65)); //90
```

# Math.random() Method:
=> Math.random()  return a random number between 0(inclusive) and 1(exclusive);

```js
//console.log(Math.random());
console.log(Math.random());
```

=>Math.random() always returns a number lower than 1.

=>Math.random() used with Math.floor() can be used to return random integers.

Eg1. Returns a random integer from 0 to 9

```js
console.log(Math.floor(Math.random() * 10));

//Eg2. Return a random integer from 0 to 10.
console.log(Math.floor(Math.random() * 11));

//Eg3. Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 100));
```

# Math.log() Method:
=> Math.log(x) returns the natural logarithm of x:

```js
console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(10));
```

# Math.log2() Method:
=> Math.log2() returns the base 2 logarithm of x.

=> How many time multiply 2 to get 8

```js
console.log(Math.log2(8)); //3
console.log(Math.log2(1024)); //10
```

# Math.log10() Method:
=> Math.log10(x) returns the base 10 logarithms of x:

=>How may times we multiply 10 to get 1000.

```js
console.log(Math.log10(1000));
```
