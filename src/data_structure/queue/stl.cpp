#include <iostream>
#include <queue>

using namespace std;

template<typename T>
void display(queue<T> q) {
    int index = q.size();
    cout << "(front -- back) ";
    while (index > 0) {
        --index;
        cout << q.front() << " ";
        q.pop();
    }
    cout << endl;
}

int main() {
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(1412);
    q.push(65);
    q.push(9);
    q.pop();
    cout << "There are " << q.size() << " elements in the queue." << endl;
    cout << "The header element of queue is " << q.front() << "." << endl;
    cout << "The tail element of queue is " << q.back() << "." << endl;
    cout << "The element of queue:";
    display(q);
}