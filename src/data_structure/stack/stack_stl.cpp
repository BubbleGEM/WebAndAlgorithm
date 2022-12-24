#include <iostream>
#include <stack>

using namespace std;

void display();

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
  cout << s.size();
  cout << s.top();
  display();
}