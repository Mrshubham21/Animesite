#include <stdio.h>

int is_prime(int n) {
    if (n <= 1) {
        return 0; // Not prime
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
        }
    }
    return 1; // Prime
}

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);

    if (is_prime(number)) {
        printf("%d is a prime number.\n", number);
    } else {
        printf("%d is not a prime number.\n", number);
    }

    return 0;
}
