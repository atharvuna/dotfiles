#include <stdio.h>
#include <string.h>

int main() {
    char name[20] = "atharv ";
    char lName[] = "una";
    strcat(name, lName);    // appending str2 to str1, printf(str1)

    printf("hello %s\n", name);
    
    // printf("lenght of the name: %lu\n", strlen(name));

    return 0;
}
