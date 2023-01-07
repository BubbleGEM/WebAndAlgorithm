#include <iostream>

using namespace std;

#define MAX_SIZE 100

template<class T>
class Queue {
private:
    // front -- -1 | 0
    int front = -1;
    // rear -- 0~MAX_SIZE-1
    int rear = -1;
    T q[MAX_SIZE];

public:
    Queue() = default;

    bool isEmpty() {
        return front == rear;
    }

    void enqueue(T element) {
        if ((rear - front) == (MAX_SIZE - 1)) {
            cerr << "overflow" << endl;
        } else {
            front = 0;
            ++rear;
            q[rear] = element;
        }
    }

    void dequeue() {
        if (rear == front == -1) {
            cerr << "underflow" << endl;
        } else if (rear == front == 1) {
            rear = front = 0;
        } else {
            --rear;
        }
    }

    T front() {
        if (rear == front == -1) {
            return nullptr;
        } else {
            return q[front];
        }
    }

    T back() {
        if (rear == front == -1) {
            return nullptr;
        } else {
            return q[rear];
        }
    }

    int size() {
        if (rear == front == -1) {
            return 0;
        } else {
            return rear - front + 1;
        }
    }

    void display() {}
};

int main() {
    Queue<int> q;
    q.enqueue(1);
    q.enqueue(6);
    q.enqueue(5);
    q.enqueue(1250);
    q.enqueue(654);
    q.enqueue(972);
    cout << "There are " << q.size() << " elements in the queue." << endl;

    return 0;
}