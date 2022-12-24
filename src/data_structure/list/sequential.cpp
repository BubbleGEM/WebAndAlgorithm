#include <iostream>

using namespace std;

#define MAX_SIZE 100

template <typename T>
class SequentialList
{
private:
  T items[MAX_SIZE];
  int length;

public:
  SequentialList() = default;

  int size()
  {
    return length;
  }
};

int main()
{
  return 0;
}