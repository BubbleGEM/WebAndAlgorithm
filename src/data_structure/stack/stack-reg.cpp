#include <iostream>

#define MAX_SIZE 100

using namespace std;

template <typename T>
class Stack
{
private:
  int top = -1; // 0 ~ MAX_SIZE-1
  T s[MAX_SIZE];

public:
  Stack() = default;

  bool isEmpty()
  {
    // return top == -1;
    if (top == -1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  void push(T element)
  {
    if (top == MAX_SIZE - 1)
    {
      cout << "overflow" << endl;
    }
    else
    {
      ++top;
      s[top] = element;
    }
  }

  void pop()
  {
    if (isEmpty())
    {
      cout << "underflow" << endl;
    }
    else
    {
      --top;
    }
  }

  T peek()
  {
    return s[top - 1];
  }

  int size()
  {
    return top + 1;
  }

  void display()
  {
    int length = top;
    while (length >= 0)
    {
      cout << s[length] << " ";
      --length;
    }
    cout << endl;
  }
};

int main()
{
  Stack<int> s;
  s.push(1);
  s.push(3);
  s.push(5);
  s.push(1250);
  s.push(666);
  s.push(1412);
  s.push(520);
  // s.pop();
  cout << "There are " << s.size() << " elements in the stack." << endl;
  cout << "The top of stack element is " << s.peek() << "." << endl;
  cout << "The stack element has ";
  s.display();
  cout << "There are " << s.size() << " elements in the stack." << endl;
  return 0;
}