#include <bits/stdc++.h>
#include <iostream>

#define SIZE 100

using namespace std;

class Stack
{
  int items[SIZE];
  // 0 ~ SIZE-1
  int top;

public:
  Stack()
  {
    top = -1;
  }

  bool isEmpty()
  {
    if (top == -1)
    {
      cout << "Stack is empty." << endl;
      return true;
    }
    return false;
  }

  bool isFull()
  {
    if (top == SIZE - 1)
    {
      cout << "Stack is full." << endl;
      return true;
    }
    return false;
  }
};

int main()
{
  cout << "" << endl;
  std::cout << std::format("Print");
}