#include <iostream>
#include <stack>

using namespace std;

template <typename T>
void display(stack<T> s)
{
  int length = s.size();
  while (length > 0)
  {
    cout << s.top() << " ";
    s.pop();
  }
  cout << endl;
}

int main()
{
  stack<int> s;
  s.push(12);
  s.push(7);
  s.push(6);
  s.push(2);
  s.push(1);
  s.push(4);
  s.push(19);
  s.push(11);
  cout << "There are " << s.size() << " elements in the stack." << endl;
  cout << "The top of stack element is " << s.top() << "." << endl;
  cout << "The stack element has ";
  display(s);
}