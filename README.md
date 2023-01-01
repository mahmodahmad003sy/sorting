# Interfaces and abstract class

============

What is interface:

the interface is contract between classes, so if the class implements interface, it must have all attributes and methods defined in the interface.

using the interface we make sure that all classes have the same (required) structure.

Notes:

1- interface don't implement methods and don't have constructor

2- interface can be extended

3- you cant use 'instanceof' key word with interface (for example: to narrow the type)

# =============

Abstract class:

It is both contract and implementation for methods

so it includes attributes each class extends the abstract class must

have it and we can implement new methods in it

Notes:

1- you cant initiate instances of abstract classes, you can extend it to new class and create new instance from the child class

2- the required attributes and methods of the abstract class defined using "abstract" key word

3- abstract class can implement interface

Both of interface and abstract class can be used to solve the same problem with deferent use case

In the following git repo, I have implemented simple sorting application based on both ways,

#typescript #interface #class #abstract #oop #sort

=============================================================

How to Run:
cd sort-using-interface
ts-node src/index.ts

OR:

cd sort-using-abstract
ts-node src/index.ts
