#include <iostream>
#include <string>

int main() {
   std::string foods[5];
   int size = sizeof(foods)/sizeof(foods[0]);
   std::string temp;

   for (int i = 0; i < size; i++) {
      std::cout << "Digite o alimento que voce gosta ou digite 'q' para sair. \n";
      std::getline(std::cin, temp);
      
      if (temp == "q") {
         break;
      } else {
         foods[i] = temp;
      };
   };

   std::cout << "Voce gosta dos seguintes alimentos: \n";

   for (int i = 0; !foods[i].empty(); i++) {
      std::cout << foods[i] << "\n";
   };

   return 0;
}