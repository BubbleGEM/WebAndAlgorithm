#include <iostream>

using namespace std;

//
int sumA(int num) {
    int result = 0;
    for (int i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

//
int sumB(int num) {
    int result = 0;
    while (num > 0) {
        result += num--;
    }
    return result;
}

// recursion
int sumC(int num) {
    if (num > 0) {
        return num += sumC(num - 1);
    } else {
        return 0;
    }
}

int main() {
    cout << "Function sumA: " << sumA(10) << endl;
    cout << "Function sumB: " << sumB(10) << endl;
    cout << "Function sumC: " << sumC(10) << endl;
    return 0;
}