#include <iostream>
#include <forward_list>

using namespace std;

int main() {
  forward_list<int> l;
  l.assign(4, 3);
  l.assign(4, 3);
  l.assign(4, 3);
  l.assign(4, 3);
  l.assign(4, 3);
  l.sort();
  return 0;
}