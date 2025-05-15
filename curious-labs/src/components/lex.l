%{
#include <stdio.h>

int a_count = 0;
int b_count = 0;
%}

%%
[a|b]+ {
    a_count = 0;
    b_count = 0;

    for (int i = 0; yytext[i] != '\0'; ++i) {
        if (yytext[i] == 'a') a_count++;
        else if (yytext[i] == 'b') b_count++;
    }

    if (a_count % 2 == 0 && b_count % 2 == 0)
        printf("Accepted: %s\n", yytext);
    else
        printf("Rejected: %s\n", yytext);
}

.|\n ; 
%%

int main(int argc, char **argv) {
    yylex();
    return 0;
}
