#include <iostream>
#include <ctime>

using namespace std;

clock_t startA, startB, stopA, stopB;
double durationA, durationB;

// print 1 ~ n
// regular
void print_nA(int n)
{
  for (int i = 1; i <= n; i++)
  {
    cout << i << " ";
  }
  cout << endl;
}

// recursion
void print_nB(int n)
{
  if (n)
  {
    print_nB(n - 1);
    cout << n << " ";
  }
}

int main()
{
  cout << "regular:" << endl;
  startA = clock();
  print_nA(100);
  stopA = clock();
  cout << "recursion:" << endl;
  startB = clock();
  print_nB(1000);
  stopB = clock();
  // durationA = ((double)(stopA - startA)) / CLK_TCK // s
  // cout << CLK_TCK; // 1000
  // ms
  durationA = ((double)(stopA - startA));
  durationB = ((double)(stopB - startB));
  cout << endl;
  cout << "regular -- Time of consumption: " << durationA << " ms." << endl;
  cout << "recursion -- Time of consumption: " << durationB << " ms." << endl;
  return 0;
}