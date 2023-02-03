/** Monaco - kw */

/** Python ====================*/

function createEditor(containerId) {
    var editor = monaco.editor.create(document.getElementById(containerId), {
      value: codeOne,
      language: "python",
      theme: "vs-dark",
      readOnly: true
    });
}

function createEditor2(containerId) {
  var editor2 = monaco.editor.create(document.getElementById(containerId), {
    value: codeTwo,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor3(containerId) {
  var editor3 = monaco.editor.create(document.getElementById(containerId), {
    value: codeThree,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor4(containerId) {
  var editor4 = monaco.editor.create(document.getElementById(containerId), {
    value: codeFour,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor5(containerId) {
  var editor5 = monaco.editor.create(document.getElementById(containerId), {
    value: codeFive,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor6(containerId) {
  var editor6 = monaco.editor.create(document.getElementById(containerId), {
    value: codeSix,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor7(containerId) {
  var editor7 = monaco.editor.create(document.getElementById(containerId), {
    value: codeSeven,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createOutput1(containerId) {
  var output1 = monaco.editor.create(document.getElementById(containerId), {
    value: outputOne,
    language: "text",
    theme: "vs-dark",
    readOnly: true,
    lineNumbers: false
  });
}

  

let codeOne = 
`
#Python

class CookieFactory:
    

`

let codeTwo = 
`
#Python

class CookieFactory:
    def __init__(self):
        

`

let codeThree = 
`
#Python

class CookieFactory:
    def __init__(self, color):
        
`

let codeFour = 
`
#Python

class CookieFactory:
    def __init__(self, color):
        self.color = color
`

let codeFive = 
`
#Python

class CookieFactory:
    def __init__(self, color):
        self.color = color
    
    def Flavor(self):
        if self.color == 'brown':
            print("chocolate chip cookie")
        elif self.color == 'red':
            print("strawberry cookie")
        elif self.color == 'yellow':
            print("butter cookie")
        else:
            print("Sorry, we do not have ", self.color, " cookies")

`

let codeSix = 
`
#Python

class CookieFactory:
    def __init__(self, color):
        self.color = color
    
    def Flavor(self):
        if self.color == 'brown':
            print("chocolate chip cookie")
        elif self.color == 'red':
            print("strawberry cookie")
        elif self.color == 'yellow':
            print("butter cookie")
        else:
            print("Sorry, we do not have ", self.color, " cookies")

customer_one = CookieFactory('yellow')
customer_two = CookieFactory('gold')
`

let codeSeven = 
`
class CookieFactory:
    def __init__(self, color):
        self.color = color
    
    def Flavor(self):
        if self.color == 'brown':
            print("chocolate chip cookie")
        elif self.color == 'red':
            print("strawberry cookie")
        elif self.color == 'yellow':
            print("butter cookie")
        else:
            print("Sorry, we do not have ", self.color, " cookies")

customer_one = CookieFactory('yellow')
customer_two = CookieFactory('gold')

customer_one.Flavor()
customer_two.Flavor()
`
let outputOne = 
`
OUTPUT:

butter cookie
Sorry, we do not have gold cookies
`
/** C++ ====================*/

function createEditor8(containerId) {
  var editor8 = monaco.editor.create(document.getElementById(containerId), {
    value: codeEight,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor9(containerId) {
  var editor9 = monaco.editor.create(document.getElementById(containerId), {
    value: codeNine,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor10(containerId) {
  var editor10 = monaco.editor.create(document.getElementById(containerId), {
    value: codeTen,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor11(containerId) {
  var editor11 = monaco.editor.create(document.getElementById(containerId), {
    value: codeEleven,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor12(containerId) {
  var editor12 = monaco.editor.create(document.getElementById(containerId), {
    value: codeTwelve,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor13(containerId) {
  var editor13 = monaco.editor.create(document.getElementById(containerId), {
    value: codeThirteen,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createOutput2(containerId) {
  var output2 = monaco.editor.create(document.getElementById(containerId), {
    value: outputTwo,
    language: "text",
    theme: "vs-dark",
    readOnly: true,
    lineNumbers: false
  });
}

let codeEight = 
`
#include <iostream>

/* C++ */

class CookieFactory{

};
`

let codeNine = 
`
#include <iostream>

/* C++ */

class CookieFactory{
    public:
        std::string Color;
};
`

let codeTen = 
`
#include <iostream>

/* C++ */

class CookieFactory{
    public:
        std::string Color;

    CookieFactory(std::string color){
        Color = color;
    }

};
`

let codeEleven =
`
#include <iostream>

/* C++ */

class CookieFactory{
    public:
        std::string Color;

        CookieFactory(std::string color){
            Color = color;
        }
    
        void Flavor(){
            if (Color == "brown")
                std::cout << "chocolate chip cookie" << std::endl;
            else if (Color == "red")
                std::cout << "strawberry cookie" << std::endl;
            else if (Color == "yellow")
                std::cout << "chocolate chip cookie" << std::endl;
            else
                std::cout << "Sorry, we do not have " << Color << " cookies" << std::endl;
        }

};
`

let codeTwelve =
`
#include <iostream>

/* C++ */

class CookieFactory{
    public:
        std::string Color;

        CookieFactory(std::string color){
            Color = color;
        }
    
        void Flavor(){
            if (Color == "brown")
                std::cout << "chocolate chip cookie" << std::endl;
            else if (Color == "red")
                std::cout << "strawberry cookie" << std::endl;
            else if (Color == "yellow")
                std::cout << "chocolate chip cookie" << std::endl;
            else
                std::cout << "Sorry, we do not have " << Color << " cookies" << std::endl;
        }

};

int main(){

    CookieFactory customer_one = CookieFactory("red");
    CookieFactory customer_two = CookieFactory("white");    

    return 0;
}
`

let codeThirteen =
`
#include <iostream>

/* C++ */

class CookieFactory{
    public:
        std::string Color;

        CookieFactory(std::string color){
            Color = color;
        }
    
        void Flavor(){
            if (Color == "brown")
                std::cout << "chocolate chip cookie" << std::endl;
            else if (Color == "red")
                std::cout << "strawberry cookie" << std::endl;
            else if (Color == "yellow")
                std::cout << "chocolate chip cookie" << std::endl;
            else
                std::cout << "Sorry, we do not have " << Color << " cookies" << std::endl;
        }

};

int main(){

    CookieFactory customer_one = CookieFactory("red");
    CookieFactory customer_two = CookieFactory("white");

    customer_one.Flavor();
    customer_two.Flavor();

    return 0;
}
`

let outputTwo =
`
strawberry cookie
Sorry, we do not have white cookies
`

/* Applying OOP *===============================*/

function createEditor14(containerId) {
  var editor14 = monaco.editor.create(document.getElementById(containerId), {
    value: codeFourteen,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor15(containerId) {
  var editor15 = monaco.editor.create(document.getElementById(containerId), {
    value: codeFifteen,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor16(containerId) {
  var editor16 = monaco.editor.create(document.getElementById(containerId), {
    value: codeSixteen,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor17(containerId) {
  var editor17 = monaco.editor.create(document.getElementById(containerId), {
    value: codeSeventeen,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor18(containerId) {
  var editor18 = monaco.editor.create(document.getElementById(containerId), {
    value: codeEighteen,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor19(containerId) {
  var editor19 = monaco.editor.create(document.getElementById(containerId), {
    value: codeNineteen,
    language: "python",
    theme: "vs-dark",
    readOnly: true
  });
}

function createEditor20(containerId) {
  var editor20 = monaco.editor.create(document.getElementById(containerId), {
    value: codeTwenty,
    language: "cpp",
    theme: "vs-dark",
    readOnly: true
  });
}

let codeFourteen =
`
#Python

class CookieFactory:
    def __init__(self, color):
        self.color = color
    
    def Flavor(self):
        if self.color == 'brown':
            print("chocolate chip cookie")
        elif self.color == 'red':
            print("strawberry cookie")
        elif self.color == 'yellow':
            print("butter cookie")
        else:
            print("Sorry, we do not have ", self.color, " cookies")
#Step 1
class Cashier(CookieFactory):
    #Step 2
    def __init__(self, color, cashier):
        #Step 3
        super().__init__(color)
        #Step 4
        self.cashier = cashier
    #Step 5
    def Process(self):
        print(self.cashier,":", "Hello, what type of cookie would you like? \n")
        if self.color != "":
            print("Customer: ", self.color, "\n", self.cashier, ": Ok, let me check to see if we have that")
        else:
            print("No customers")
        


customer_one = CookieFactory('yellow')
customer_two = CookieFactory('gold')

#Step 6
cashier_one = Cashier("red", "Razan")
cashier_two = Cashier("White", "Alexis")

#Step 7
cashier_one.Process()
cashier_two.Process()

#customer_one.Flavor()
#customer_two.Flavor()
`

let codeFifteen =
`
#include <iostream>

/* C++ */

class CookieFactory{
    public:
        std::string Color;
    
        CookieFactory(std::string color){
            Color = color;
        }

        void Flavor(){
            if (Color == "brown") {
                std::cout << "chocolate chip cookie" << std::endl;
            }
            else if (Color == "red") {
                std::cout << "strawberry cookie" << std::endl;
            }
            else if (Color == "yellow") {
                std::cout << "chocolate chip cookie" << std::endl;
            }
            else {
                std::cout << "Sorry, we do not have " << Color << " cookies" << std::endl;
            }
        }
};

/* Step 1 */
class Cashier:CookieFactory {
    public:
    /* Step 2 */
        std::string Cashier_;

        /* Step 3 */
        Cashier(std::string color, std::string cashier)
        /* Step 4 */
            : CookieFactory(color) {
                Cashier_ = cashier;
            }
        
        /* Step 5 */
        void Process(){
            std::cout << Cashier_ <<": Hello, what type of cookie would you like? \n " << std::endl;
            if (Color != "")
                std::cout << "Customer: " << Color << "\n" << Cashier_ << ": Ok, let me check to see if we have that" << std::endl;
            else
                std::cout << "No customers" << std::endl;
        }

};

int main(){

    CookieFactory customer_one = CookieFactory("red");
    CookieFactory customer_two = CookieFactory("white");

    /* Step 6 */
    Cashier cashier_one = Cashier("yellow", "Razan");
    Cashier cashier_two = Cashier("gold", "Alexis");

    /* Step 7 */
    cashier_one.Process();
    cashier_two.Process();

    //customer_one.Flavor();
    //customer_two.Flavor();

    return 0;
}

`

let codeSixteen =
`
#include <iostream>

/* C++ */

/* Step 1 */
class BestSelling{
    virtual void FanFave() = 0;
};

/* Step 2 */
class CookieFactory : BestSelling{
    public:
        std::string Color;
    
        CookieFactory(std::string color){
            Color = color;
        }

        void Flavor(){
            if (Color == "brown"){
                std::cout << "chocolate chip cookie" << std::endl;
            }
            else if (Color == "red"){
                std::cout << "strawberry cookie" << std::endl;
            }
            else if (Color == "yellow"){
                std::cout << "chocolate chip cookie" << std::endl;
            }
            else{
                std::cout << "Sorry, we do not have " << Color << " cookies" << std::endl;
            }
        }

        /* Step 3 */
        void FanFave(){
            if (Color == "brown"){
                std::cout << "This is our best seller" << std::endl;
            } 
            else if (Color == "red"){
                std::cout << "Great choice!" << std::endl;
            }
            else if (Color == "yellow"){
                std::cout << "Yum!" << std::endl;
            } else {
                std::cout << "We would gladly consider adding new flavors" << std::endl;
            }
            
        }
};

int main(){

    CookieFactory customer_one = CookieFactory("red");
    CookieFactory customer_two = CookieFactory("white");

    customer_one.Flavor();
    customer_two.Flavor();

    /* Step 4 */
    customer_one.FanFave();
    customer_two.FanFave();

    return 0;
}

`

let codeSeventeen =
`
#Python

class CookieFactory:
    def __init__(self, color):
        #Step 1
        self.__color = color

    #Step 2
    def set_color(self, color):
        self.__color = color

    def get_color(self):
        return self.__color
    
    def Flavor(self):
        if self.color == 'brown':
            print("chocolate chip cookie")
        elif self.color == 'red':
            print("strawberry cookie")
        elif self.color == 'yellow':
            print("butter cookie")
        else:
            print("Sorry, we do not have ", self.color, " cookies")

customer_one = CookieFactory('yellow')
customer_two = CookieFactory('gold')

#customer_one.Flavor()
#customer_two.Flavor()

#Step 3
customer_two.set_color("brown")

#Step 4
print(customer_two.get_color())

`

let codeEighteen =
`
#include <iostream>

/* C++ */

class CookieFactory {
    /* Step 1 */
    private:
        std::string Color;

    public:
        CookieFactory(std::string color){
            Color = color;
        }
        /* Step 2 */
        void set_color(std::string color){
            Color = color;
        }

        std::string get_color(){
            return Color;
        }

        void Flavor(){
            if (Color == "brown"){
                std::cout << "chocolate chip cookie" << std::endl;
            }
            else if (Color == "red"){
                std::cout << "strawberry cookie" << std::endl;
            }
            else if (Color == "yellow"){
                std::cout << "chocolate chip cookie" << std::endl;
            }
            else{
                std::cout << "Sorry, we do not have " << Color << " cookies" << std::endl;
            }
        }

};

int main(){

    CookieFactory customer_one = CookieFactory("red");
    CookieFactory customer_two = CookieFactory("white");

    //customer_one.Flavor();
    //customer_two.Flavor();

    /* Step 3 */
    customer_one.set_color("brown");
    /* Step 4 */
    std::cout << customer_one.get_color() << std::endl;

    return 0;
}

`

let codeNineteen =
`
#Python

class CookieFactory:
    def __init__(self, color):
        self.color = color
    
    def Flavor(self):
        if self.color == 'brown':
            print("chocolate chip cookie")
        elif self.color == 'red':
            print("strawberry cookie")
        elif self.color == 'yellow':
            print("butter cookie")
        else:
            print("Sorry, we do not have ", self.color, " cookies")

#Step 1: Create Child Class
class CFMembership(CookieFactory):
    def __init__(self, color, amount):
        super().__init__(color)
        self.amount = amount
    
    #Step 2: Redefine
    def Flavor(self):
        if self.color == 'brown':
            print(self.amout,"chocolate chip cookie(s)")
        elif self.color == 'red':
            print(self.amount,"strawberry cookie(s)")
        elif self.color == 'yellow':
            print(self.amount,"butter cookie(s)")
        else:
            print("Sorry, we do not have ",self.amount, self.color, " cookies")

#Step 3: Point customer to member
customer_one = CookieFactory('yellow')
member_one = CFMembership('yellow', 50)

customer_one = member_one

customer_one.Flavor()
`

let codeTwenty =
`
#include <iostream>

/* C++ */

class CookieFactory {
    public:
        std::string Color;

        CookieFactory(std::string color){
            Color = color;
        }

        /* Step 1 */
        virtual void Flavor(){
            if (Color == "brown"){
                std::cout << "chocolate chip cookie" << std::endl;
            }
            else if (Color == "red"){
                std::cout << "strawberry cookie" << std::endl;
            }
            else if (Color == "yellow"){
                std::cout << "butter cookie" << std::endl;
            }
            else{
                std::cout << "Sorry, we do not have " << Color << " cookies" << std::endl;
            }
        }

};

/* Step 2 */
class CFMembership: public CookieFactory {
    public:
        int Amount;

        CFMembership(std::string color, int amount)
            : CookieFactory(color){
                Amount = amount;
            }
        
        /* Step 3 */
        void Flavor(){
            if (Color == "brown"){
                std::cout << Amount << " " << "chocolate chip cookies" << std::endl;
            }
            else if (Color == "red"){
                std::cout << Amount << " " << "strawberry cookies" << std::endl;
            }
            else if (Color == "yellow"){
                std::cout << Amount << " " << "butter cookies" << std::endl;
            }
            else{
                std::cout << "Sorry, we do not have " << Amount << " " << Color << " cookies" << std::endl;
            }
        }

};

int main(){

    /* Step 4 */
    CFMembership member_one = CFMembership("red", 12);
    CFMembership member_two = CFMembership("brown", 30);

    CookieFactory *customer_one = &member_one;
    CookieFactory *customer_two = &member_two;
    
 
    customer_one->Flavor();
    customer_two->Flavor();

    return 0;
}

`



/** Python(Big) ====================*/

function createEditor_1(containerId) {
    var editor = monaco.editor.create(document.getElementById(containerId), {
      value: bCode,
      language: "python",
      theme: "vs-dark",
      readOnly: true
    });
}

function createEditor_2(containerId) {
    var editor = monaco.editor.create(document.getElementById(containerId), {
      value: bCode2,
      language: "python",
      theme: "vs-dark",
      readOnly: true
    });
}

function createEditor_3(containerId) {
    var editor = monaco.editor.create(document.getElementById(containerId), {
      value: bCode3,
      language: "python",
      theme: "vs-dark",
      readOnly: true
    });
}

function createEditor_4(containerId) {
    var editor = monaco.editor.create(document.getElementById(containerId), {
      value: bCode4,
      language: "python",
      theme: "vs-dark",
      readOnly: true
    });
}

function createEditor_5(containerId) {
    var editor = monaco.editor.create(document.getElementById(containerId), {
      value: bCode5,
      language: "python",
      theme: "vs-dark",
      readOnly: true
    });
}

function createEditor_6(containerId) {
    var editor = monaco.editor.create(document.getElementById(containerId), {
      value: bCode6,
      language: "python",
      theme: "vs-dark",
      readOnly: true
    });
}

let bCode = 
`
def add_items(n):
    return n + n
`

let bCode2 = 
`
def print_items(n):
    for i in range(n):
        print(i)

print_items(19)
`

let bCode3 = 
`
def print_items(n):
    for i in range(n):
        print(i)

    for j in range(n):
        print(j)

print_items(19)
`

let bCode4 =
`
def print_items(n):
    for i in range(n):
        for j in range(n):
            print(i,j)

print_items(19)
`

let bCode5 =
`
def print_items(n):
    for i in range(n):
        for j in range(n):
             for k in range(n):
                print(i,j)

print_items(19)
`

let bCode6 = 
`
def print_items(n):
    # - O(n^2)
    for i in range(n):
        for j in range(n):
            print(i,j)

    # - O(n)
    for k in range(n):
        print(k)

print_items(10)
`