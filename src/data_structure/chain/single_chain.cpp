#include <iostream>
#include <list>
#include <vector>

using namespace std;

template<class T>
class Chain {
  private:
    class Node {
      public:
        T data;
        Node *next;
    };

    Node *head;
    int chainSize = 0;
  public:
    Chain() {
      head = new Node;
      head->data = 0;
      head->next = nullptr;
    }

    void create(int n);

    int size() {
      cout << "The chain has " << chainSize << " elements." << endl;
      return chainSize;
    }

    bool isEmpty() {
      if (chainSize == 0) {
        cout << "The chain is empty." << endl;
      } else {
        cout << "The chain is not empty." << endl;
      }
      return chainSize == 0;
    }

    void push() {}

    void pushBack() {}

    void insert(T element);

    void findValue();

    void findIndex();

    void deleteValue();

    void deleteIndex();

    void display();
};

int main() {
  list<int> l;
  vector<int> v;
}