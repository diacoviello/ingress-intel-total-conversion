// @author         johtata
// @name           ornament icons
// @category       Layer
// @version        0.1.0
// @description    Add own icons and names for ornaments


// use own namespace for plugin

function setup () {
  window.ornaments.icon=
  {
    "sc5_p":{name:"ScanVolatile",
             url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR42uy9edBt51Xm91vvsPc+03e++d7vzoOupCvJtgbLsmXLGDEYaEND041pm1Q7nW6CoYBA011JKKh00kV3AQkkIVSoorpChwZC4ybExoAx2NiWLQ+SrFm6uvfqzuM3nnEP7/uu/HEupJrBFlh2sK1V9dX5/jh19n7Pfvaz1nqe9e4Dr8RXdchX46JvzxAVnIiAaHx6SnoFAF8F8Xrwas1rc5Peqpa3e2uNT3ws1jw5UXmWFD78caheAcBXUBz3iIdbvco/WTHm8KKTb1pum1a/lcidoakNO+PI9Yp6swofGWJ+dmDsh54Idf0KAL7M4xYvXYf+zLzyD/c40z88l3FoTtjVhdZSoLPsGE8SGxcTG9ctF7cjZ6eEq5H/fYz+/MSY08/EWr+SvyP7lbioO11rbq8x7yiQ/3YBeedhZ4o72gVH+obFXRULtypLr89YvrfL8vECu5CwXmnVkX7AOOzr6pS+26jUe3GfuUDUVwDwZRL3iMuskV9ru/hju0SOH/VWbp133LRm2HU4sPAaYe+bF1m+q6B7yNA+6Fm4ybFyOGe+D8vtSKHgIh2b5MEqxP1LRk7vNn79ssZXAPC3MV5jfLbLsrIb8w056Xt76PesGWMPOeXgfGLlUGT+1kDvbli929M71JDyEswU7AjtlbAK+aqju+zBRRyBTki2XZm7Nbl3SjIv7CaduIB+RbHBl3UNcKezPql5l4EfcobFDPasYNhjlH29xN4Dib2vythzd4/FWzz5boNvR/JMCWWPctRgM3BLjtJvocEgk5z6Ss76Z4dc/MQGG08LJy8LL2zL+EpKv12a9O6PVWn0CgP8/xyvFZMJ/PfWyE8Vorv7aG8vkQM+sXclse825cADloNf02bxFsUt1DShIQ7nuHoaPv0nAz7we9s8+fiEcgeyJKQwJWiFmYv0VjyteSXvJjQFWoGsV+mrJo2+fpdyfZeRc5eU+AoDfKlFHG9WPPJPM8y3epV726J22SprTjjU9ezaZ9j1uoK1Ny7SPVbTXqzIbIVMHbq9wpUTOR/+4Fk+/fEdLl8xVC3YczTx4NfP8YY3LzK/lpGWdkgyJZYerhcMn0hsfGrApSdqXjjvOLVVhfMhfGQL+zNlkj96ItXNKwzwRY5jYmXVcsAk/dU28k/62H29lMyiKGsoewvDnn3C6muFtQcK5m8qUb9FGtc0G13OPWX52AeHvP99V/n4w0POXvXlKJpf2mn4w8vXwkMvnq9XL12K7dEg89Z5YoAQK8Q3dHvQ6Qm+FWiT8HUwRa2H29H+AxH/5lVrr+y15vTFFF9hgC9G3Fy0OybyE07Sf9E2cXmhUVaMYZfzzGliqZtYuTlx9C0Ze+/v4/eAyQx+Ytk5C49/asBDH9nh5Gm4MhRGClPkV2Mt/+iENgngeMu2cq/fuLAgP33Pne7mN3/dXm6/p0NvcULmS1IJ9dCweUq49Ml1th6p2T6Vc2HqOB3Tztl69Esj7P/waBNGrzDAyxh3OCcS43fmpP9x3khnWSIrCis+saut7Nql7L4TbvuWHnvfYGmvJVqS01xvc+7TiU//wZCH/mib06cyrg9zNvHlRORX1Mg/P9HU4z89znrQcKXS5zsNv3npHHefPjPYW45x7VaO8ULKJ0h3SDanrC5kdGxCJhWmTBR1KHzD/SnZb9wj2Wg/7vlzhPQKAL7QfG9tx0v6Z130p3ZJau02wm4HayvKoVdbjry5y7Fvyjj8VsfcbTm0Pax7Lj9U8+hvXeFT79/iqccqtrY9mxF2aFIl5kenUX7ydF2O/7JjXm8Yt2n99uZW/Z6Tp4brLzw3XJvshMV+b16yrEXHC66X8KvQWgGXQ3fsWKlb0iPuEU3fHtGDq5inzpO2XgHA3zBe5bIjmerP9i0/smSltTuzrPSUw0cSt70+555vW+L4W7vsugd6y0JbFpme7/DkHw55+Pd2OPnpyLUNx0a0jBQGBCpJTyaJP3oy1NPPdezN2NTrjV69OOJD+U76d+cv1ZcvrHO/yeeL1ZUVXN9i+hOW9hr6Cw41JSkG8tDQEWdckDtjkgcPmeLx/fiLZ2j0FQD8dYSdzL0ut/L+vsQHdlmVtY6w9zDc8kCbV39ziyNvyZg7GqFbEibC+Dnh6T9Y5+PvucZjH6o4d06YRMtIIkMiOyExVIa1sT/wdIhP/HXO5XJFdXqDT129Wj7z9FObxy5c2NqlITP9uTkkC/g5pb3fUOwztFqCMw3tlOiJXVV4Z0p61ypcXPX2wqWUXgHA56R8g99n3RsL5TcXRPYv5srKvOGW1zju+7YFXvfty+x7naF3MNJyXdL1Hmc+CZ/4v4c8+QdTLj9n2RhljKxlTMNYE5OklFgNxv4qmJ+7qn8zXX9nwvN2qr9x6WLz9KnT1fHhxK10e33mF+dY3J3R3yesHGyze2+Xlk/YKpDH5Ax6PKn+vSaqPSDmxFnV8StdwJ+v8vPMZMrr5zT+2Jy137LoYr5rr7DnmOHQ3R32HrccuE2YXzXYTKiuJa591vL8H5Q88dCIC9c85aSmVmGKoZRErYlKE1OgUk6rcu9Tqpsvx/mudDmyOG9/5Ngh/31vfcuqe/MbWxw4ACYbYiphe6PFxpkFdk71uPTYJa49dZYrW42eq+X8pcgvTpSf+2Td1K8wAPAajLHY7+0I/36X4VX9Lm7/ceW+b17iDd/W585vaLF2m1K0I25csPNkxrPvHfPR/2vAcw9XbGx4hpUw1URthEqEWqARQyWiDXImGd7+VNRTL9c5T2q2stD+o/Wr9adePLuz5/ylep+xfdudX6DVN7SXA8v7Fjlw016WdnfxEshiLVqFPjH72nGdHlgSPnpZdeurlgFus/3VFtr3Ur+7LfW759tS7NqnHL17kSP3GI7eYzlw2NEtAkyVydmc5x4e8ckPDjj9qLC5aSgxlBpoCERVgkCl0CioCAHekwzf93hI61+sdRzp0zJW3ra0an75vtf35t7ywAp33Gnpzk/wdPHTBTZftGyehksvTLlyYszzT1/h4lb55DWpf2tL+XePTcKZryoA3OM7rzVq/0OuutYt6nzXXODoUcPtb+7y6gdWaR8cIa0d8qaLXu9x8fGSJz60w3OPjrl8KTFuWoyTpfYlyUCMSkxKUNUg5kwSOR9Fnkno//x43Tz3xV7Pvl5bNMX7u0X40SMHs29589cuFm/6mi77D0OnsJgwh20WoZljeKrhyQ+e4vGHL3H64g6ny7RxrQ7vynC/+0jzpe8WvqQAuCuzLY/7jlbSf903cqDbSyztTRy9LefeN62w7/5Ab1nJPDQ7cPpx5TN/NObpT4y4eBrGNVRRqcmIkgBDMpGokaiUKenPAf+Ld/5qI8IT9Zd2mmd/5q1D7+v3edctt5tvvff+1u433D/Pvv0eYx0ZGWG7YHS5zZlnEy8+N+W5k9c58eKlneEk/MdxpT//aNAnviIBcJ8xh8XwG21v7t7Vim7/qrD/JuHm1/c5dOc8S/ty7MIYO/XsvBg4+eiET/7JDs99NrAxsIySIwBJIKSkKep5xcZk0gtRmj9Ooh/WJI8+FdLfCmPm5hb3Le6WH7/7nvbbvu5b9sottxUsLDR0MkOa9DDpIKNhj7PPjPj0R17gM58+yZnz43OjmP5NbPjlJ79E6/iiAuA1tmWN6m1t6re0rXz/fGFuXdvvOHaL57ZXO47cLswfztA5UJMxvOh5/MPXeezDQ84/ZdnYcgzEMhWh1JgiVCR9n5H4a6rpQyJ2qqLp8VCHv416xq2drKcSf3Z1jTe/+t72rW/6+gVuv8PQ7wq5nUPTHKPNBa6+CC88eYEnHrnM2TPTsHGlfF8zrX62MvrwI80X13L+ogDg1tw7F+W7CswP9ozcupBV86t9OHAQ7nhgidvfsMjikRo3P8DIHJONPi8+O+VT79/i059Y5+plYVRnqUz+uVr1Y41LGkm/A+acKM8+34y/rOb4Dxm75tv8q0O3y9u//q1LnfvvX+PQkYy8XSFmGZ3OUQ8c1043PPnwJZ59fIOTz1+bXtqYvL+K+l8+Mk0bf+sBcMz1CoPuy2XaFeG/Koy+cz5Tt7tv2LsPjh533Hxni/23W3xXSVGIdcbZF5RHPzHl2UfHXH4xMZjANMqVBv/fJcl//fG4M+ArIFYE2/LmtsUV+WeHb8q/5w1vXLX33rfInkOOVjvDS4tmbBhsKJdOG049V/L8s9c5d+raR7avD39mMqr/6OEqTf9WAeBmP2faQdc88joRfhCJbyyopFvgF3qRI8cybr+nx9FXt1k7VtDeVZO3G8ykxfrZFo9+bMTDH9rk+ccj42mLYayenWrzUUV/4bOpfJKvwDhkssxa/en+UvyB+x5Ydg9+0y5edXeX+SUhyz0aesRqlWrYY/OM8PyjF3ns4efD40+8+Ikrm+M/LJP5gEvxU0/El2c28W8MgGPZXMep/Nu5wP09zL6Orcl9zcJ8ZOGwsHbccetdOQducXTnHZl3pAjb14UXnhzz+MMNj39iys71NtNkmCofSyrf9ZjuXOYrPA5n5AgP5oV929oBc+99b+rfddcbCnfs9jZzcy2KfIGMeaqdBbauBs6c2ODER89x6tMXuXBmMKmj/tDI+F99KFZf8C6mv5ES+CrTE6f6ziLxLxadmV/yieX5mgM3Re59U583/J0V7n3bCofvMvR31bRcBwZdLjwW+cB7BnzgvUOe/2xiZ1gwwDES+ViT+AdP6uAKXwWxHYnbkZPrlb6/Xcm/f/6ZcvDsc+WdkymdhYU5+nMVRWsb15nSWo4s7fYc7LXZXSmtjam3TfqmIPHNh9CNvWqGZ9HRlwwAx/3iooj9hQ7hXyxQ5st5zfKeyNHXem772oJbHyjYc2vA+W3itGGy3uHMUxkPfbDi93/7Ko98KnB93TJOLkwwD9XG/FIg/TfPxeFVvgrjeqVNq8k/sTkKv33x8vSRi+cn+6txXJOokqpN6tE6TDfR0WXK7UsUsWSBYIsohyXK2yt4+7KR3qK3p67GNPyipoBX2dY35Nb8bz0jx5bzhrWlhoPHLcfvW2L/nS2WDidssYNTxQzmufxi4JFPDPnMx6ecOSlMJpZBNJRRr9ZJ//OE/PHzaVLxSvxZHF2kv9g1/8fdd/f/7oNv6ck9r+mysFRi7JQwLChfjEyfHnPhsyWXXgxc2IITI3i+io9cF/1JVH//RPXSfeeXzACv8u0lj7635+uja4uBm+5Q7v66Nve+dY7bvzajf7DBUlNULUaX+3z2M4kPvn+bh/6w4vLZNuOJZRKSTo2+txR+4Lkw/fCGNi+px72523nH7l73Hy96/8JGVW99JQNga0rVqezvnz9XHT9/dnxLNTYy18lw8zUyH8nnE4trjtZ8xPem2E5CY6QpdU8V+FaJ+p4riY2XnQHucPnf7+XxNw8fTnLP3T1ueWOLo3e3WJifImZAvelJ632uPB341KdHfOazE9YvOqppi6lmTE0KNeF3Gq3+8fNx8pJbu32Fny+y/NNFVtw0nVafrkLzQ0Xml2LTIKYmSaJJoCoIICIIPHp+mr6si8kDXds3KX3PUmb+zfEjdF//phave3CFvYcaWjKA5GmqnPGW5+yjFY89NOCxZ0pOXuMz27V+x7NBL7yU47iXekIGvau3kOT2e1u84a1zHLxbybojssbRDHazfibymQ8PefKhIRdPKqPSUGtGlTg5lvgfo5Ffi8acer6c/LUKFovphbpZmzQNIca7jOEDGNMTAiYpxghGhKgOFFQjgv70IcuPn4kEgP0t0xcRm1IaXSj1y2Lb97lR3Dmc2V8cR3f5haebv3vpzPQfnjh13T/wjX1e/8Y15vbUOBq6u2Fx7zJ21xLj3ibXP3b1taPrvBv48ZeNAW7NfKsgfuSW23ntt759lfu+3tOa28SOOwzP9TnxhPKhD53jhWeVcstTRWhIVEnroPr3Hk/1777UhR/MO4cybFeIRBO+LTPy1nbhH/CZlWk1JaQGI5BZiyTBWkeMnhg9SQNNmpBSCIL/rShmM5gooN/irJ2PTfMnonpBxDD7E1QToDdeE8Y6UgIxlqRKTImU0oed5VlFqBNEdMfM2QvReq5cnHzRDadX42304Z87L/9y917J7ntjnzd/wyK33+Ho9BtMq2C8fZAnPxr4D//2ER5/bPPiqNb7n4qce1kYQEK41XrucgaMrTBtRZPj+ml476+f4ZlPGLbWPdNkaZJqJVxrxH4ySPhjJPz+S3kAy1q7aCPpO73qz9oYlryNWK+mZVTaLmAk0i0C3htEwGBnFylZEh4lJyRDnUrKUlys9bunIWBFcdbinSEi3yYKRhJWEkZABYyAGAEMRiAmBROJUUkKIer3iaApQW0hWK6Kd0+rz9i3Ek/EafMBk4RE8Qlr/faF4fbLauQ8QRNvcfnPxBQPXLsY3/2h/2eL08/v8NbvWuTBb1+mnTV4M2Sx3WY+U9pO15rAKi8XALwaKSRJniBTS8e16UiL69uRqyciW1cM2yRGEqsgze/alP3Ik2l67qV89rG8ZYO1b8ekHxObXpNRmnYutL2hlUPLQ9vWtKzQaecUrQKfF3Q783S6i5hODr5Fp7uK94nIFo8/8QxPPnGWcuJRiViTsEZxmcGKkntuAECxRhADxoCxZsYEBhQlRQgJYsSkJIQoVCqUhj1mrtgjRZstG78hSviBWBsC+QVV1g92u78eY/M7qvHcxTK8LPLt89Mq3lG0TqVotalEBqcNl06Mic0CzkVqtmhGOxRhTM+JmSjvOp7Jo8/Wn7sjeEkASCgmQaaABkZbYwShHCo0wpjAUPSTE9WfwPMnp8rp582z+3NzuO1lxcTq+wufvSPLnF+wOYXNmCvadIuMVl7R6VQsL0Xm+5aF1Q6rB3Zjiw6Fm0Oc0DhI5GQ4MhGmoxbblws2ujmhDcY7nLYwKEVRk2cNvbbQ7Qp5ZskMGAvWgjFCShF1EDWRFBShCUoIiRiFyVTZHFaMQkmVDMsdIVpPKIVxk/bVMe2rYrpz2qSfrGN89LCRnzPqTqrKs6fLL8y1DEF/eWKaNyVrvn2aLKnKYCqUoym4Dr6Y7Xy2BoLhnaL6L4HrXxAAbsqRBv0O46xYSdiW0um16FtPtxeodZ1SzLQW81+fCs2HP5d5ubfIPbZ5S8f6bzZGv6edp8W2E9svMvrtHrvmeuw/sJvFlWW6Xc9cb0q7e5Vu9zrt+RJTVIi/Sh0dKRWEKuCSpRl5tq4I189tceXcmO3NNkd2rZEvzdOaXyYvOrRagXZ7iLUbFNmQdjuS5yBWsU6xVkABEdRE1CjJCGIsxljqKmDUUFXCxkbDaNIipnlS49jeGHD1ymV2RlPKcUldKtNSO1UlD0xK98ZpLWEa4idvFfs7837lxdzlGMkJpkVpAqNqwLSZ1kr6w7Pjzb9SF3kulDsHW/x0lfTbKo1GJMMbxRllGkqaakpbhI6zOKJ36fO3+S+FARYx/FNjoxReMKI01ZQyNZRTQ4og6B93jP8Y/MXUd1Nm+97oq1W4vxG+iVzu7zmyJWPptTLm5zMOHNjNkSOrHLh9hdU9XTrtnMw1GKmICkaUSgOlZqTaAImQakzMqa8GNk5vsHFxQoyWlaU1jt1+lD2HD1EsO7SIqDQIOzg3QTRHSEStiNTADAAiiqrgrMWY2TrECElrvLFoCIBQBcPSmqOOHpEMIy3qsqBuelRVSV1GmlFk89KQratj1i/XZn0rZlfH5oGdbR6wSchzj3pPYywuJTKbMahSmDbNO4Hf/Cs9hJY3jviuHDWtQhATiaFCmwppClLZ4HFkksiStCaYdx719n861VT6BQBAbErSCY2SEmhiVg0lSBFSEmKKn3o0TP8TejuU5dYY3iA0v1R4PdrG5C1nKPrL7F5bYXX3PEuLkbnFbfatKQcPVfjV86grmcYBZZpArBCNaKqoa4uwSDUGLRvKnTFb5yM75+aIHKSYs/R6Q3p7E4t7R7jiPKUZAtvE0ECa4kLEJAPRERI0CVBFzEw/8MYjCNY7BEUVEuBNwhtDipFx0zCuxmgaY8wAm+UYC0UXOvOG3BUUUhCOWcK0x4unNjh3JXBh3XPtwoTB+oSt7W3G04z1qFSl4qL8keJ/JcH7PteVUNIKIt8tKCEqpSbGsYZpSbXj2Lk+YXuzpK7AiJgg9nsV+V+B+m8MAFUpjch5ETlurSXPW4gxKBbrLd7LjD7T/weym7PMR9UfNPBTrczkS4VltWU5NN/n8C13cdvX3MnCrR2Yu4SVU7TdJbxeRCVg1dE0ClqgmlHWgRALKD3NqE05dEx3pmyeaSg3Flg58gBrt9xGq79JI6eI9jTIBeqwSWgg6RiDxYoSo6GpDISMkBxVbGYzZjcutjMWVBAXMNbcSAkRg+Ktohqo05SQEkYiuBFJJjOUYBAyGkrIIvlqpNPOePXxNseaLk2zm6tnhpx47CrPfPIc1y6VFBPHhZjYjHHSiLx3c6STz3UtIiqiOIwhCkSfEX2OzTpkto3VQIw1wSjJKiQ5l5AvrAg8VafBzd5+PKLHJyEwjTWjWqAuGU8c02rWLv2ZZuDbu0XCr3a8PtCyNlvI59m/ssqu1Zy1vTUHbi1Z2nuWolVTxhdRc41JM8VowiclDGAyNpRjZTIRtjaF9c3EeDtRD6ZMB4kwcXTNGnv2HyTvr5DNVZTuGqZQnN+LESFM52DHoHVDjBBCIpQNqVZi5aiDUgaoSiFpi2QNLhdUEhjFGEdCcFmGISKpxkmJbV5E4wjra3wRydoGyQUpHM6Ad0JRRPK5EtepkDzikyGFddbW+tx6dB/H9iknHxvw3HNjsisNZiBvG1f8SrvgH10o2f4LOXiu0/dJu6TmXYboUQhNYjIpGQ6m5GnK8NyUzUtTpkOlqoU6oik17z0TY/jCdQAbRZyQdyxzC23mVzO6NfQXDHlrC/HyNXeI92XQ6Kz8RK+df91yy7A763Bsz928+p472fPqHsX+s/jFp+l0niX3FVEmNEmIzSJaFVSbytUXh5w8MeTSxS0GY2U8cZR1j4TFpEhbOyy0jnDs3jey+9AyrjslFEM0K5iooZrWxGgYXO8xPutg7AhlTmjSjQKtphzV1LFBbUZNge8uQuHpLbexuWFa1YRoSOKwzhFDRUNN3mzSHWxiqhprBVeAyxwUjqKltOcm+CLQ7ifyfkMxF8hanna3QcxVJvYqrsi55U0F++9YYM/TY7oPXWPu8ZFc3gjfumVb73VFcWoqiUi1njC/qVHvKnz2gybFw21Mq22idK3Q8YFe3mZhrsNyX3BZwpcVWVJEEwa50LLu14nxCysCj3oWVOVBFOoqsr29w/o6TCrh2pannERizG9Oxlqx9c1oekdhCxZ8l4O79nDkjiX6tzbYfZeo26eIcoJyNKItXWgcwwFsbpScemadi6dLLl8sGQ6hCYY6edS0MVKQQqLbynAmUSy16fYFsvNMqovUQ8W0JsToKUc5zaDF6KyydSUixuNMRUqJsq6ZTCo2t0YMJgOid0yTQH4VrKG4aLFGCGpooqBGEGsQAkYbPFOKZh1DiTEBlXRDUfQYwJoSMQ1Zq6HVnbKwLBw40mJ5j7Kwu6Ddy8kyg2k3rCxZ+gd3s7S/x2L/HCce25ZrW3NvuhI7b1qPDZMwZjINPxBS0piiaIwfrVNYF9V7kpibKhPM5mbNxmYNYcjWZeXy5cjG0DBqROuov/hYqq5/wV2AGOutScvWQqfwdNstFvstiirS61pa+QhrZG5spt/orP1pZ/y8MYbFXYc5ftdrOPq6QO+mZ8iXLpPLBqoBlV3sXHNcOtXw1KMbnD05YritTEtFnSeJxThPJrNcLZrotVpoDVIkirYhVGcIk2s0eoVy0mGaDNevBTavKtW2I40KSPmszbMQU6JuAiEolQlou0KckIsi3mMRPAajhsI61FmM+1NxqEFoEIToPYJHSKRYk1ICBFEIoX2jeDTEpiE1AacF46FjOi5YXLK0eyV5D+piiPjIoWNdCvaT28THH9ombVVMysiwLk8nte9IyV4sQ43A9cvjqropc4ui6V/lhXl35nLmO30Wl5SqXYM0JGcwNmmW4gdeigL7EopAhSRohOkkUFaRclpB1VBOhDpEQtKgohkh7bXO0O8tcvDmvRy4u0tr39No50mm5XVsytgZZJx+ccjzj004/UzJYENJKkRVMJambIjEG0JMpA4GI55xavCpxd79xzhyy0EW1raozDapmTC4PuWFU4mLFxJlbdBosWowGIwIIgokEiBiEWdRFDGGlnEYo4gR9IYkbMQhYrHOIMaQUsSQECuoyVB0Zjo5QVKEBKoJxSDiaJKZychTpbkkjEYtys2cwUJgfjd0lpXOUkneG5HYYHFfh9e8aYmrw4YXP7ZNKM0whPT3B6P6sT9/PU7WYfO2LPu5pklvr6p6cTwZ05qOKTXR2MQEpUpC9RIdis8LAGtmQwPGCt4anPXkWUGeDGIjyQoYcMh6YVrX5jvd7r7+Eqvzl5jfv8Hcocs0RQO6SrXe5rFHBnzsDy8xWLcY7SKmwtCQuQxVwVtHSJY6GBosRSYoQmwCooIVi9htllcnTLWknLSYXMsYb+4QakcdGpKCMy2cEQwNmISSQASIYAQ1+ayPR/BGSCSiUdRa1DjAkcTOOh4rKKAGMDPTSDWSNJE0IUlJqrP3pDSTkxXipCEPFpxgs0QwwlQta75Hp2dxcUhn3kIKHLt9jq1NeOb5HXaGpmphTw7+iu7Nxvq8M3bSctniQqvDYjeg87C0bMhbU3TQ8FKfZ/n5GSDpWDFPEd3rx8OG7c0hTWMpEiQVypBoVBZV0/tSbDqLS8scuOUO5o5cZ+KfZrpxHW9yRpuJzz404KEPDxlsglUhz0pEAiEkEorqjA0CEI0hiSVhUQxVkxDraQQurb9I/ewV8BuoZgwmcxQ9z7wraEdDbDxQgCZUbrR0Boy1yA3hPyTFWk+ReawqahLJgrUOa/0NYxl6y2EAACAASURBVMjPTAJrUIGkcSZ+qIBampgYjkaIgV6rjSYQFGMCIhFnwYgAiWnuCBHKYcbk+ZLtdUtvfsjc0gCxFegGVtsstg1FTO1JlV4FfPwvbQcFAsKoLNkeDWiXY8ZT2BmXDMYNVRKaPwX7FwqAF2od396Spw283loDqozHY9IEtrcMw0ppxGEMHZ8CopbaTsi6hlY3o9vpYZLn2Rc2efhjU0Zji8kNhhyx4I3HZYIVh6SGqAZxBcOpUteRsq6oNTGaRHZ1azod5cCBOeYWG5zv0aSabqvAFYb1jS7bA0tZC3UQJARUhCQGe0PSBQFjMMYQNLFdTRhXU1q5p9dtY6yAJFT0z96LtbP2MKVZexgMEcvZS5d59uQLmueZHjyw36ytrJBnlio0CIlpHUkpYVXYHtWo1pAKLInOlcDeA31udhmry2PERZZWe6ytztNqDdo2mjuYNn85AJK9V4wuahKsQMfnDC1YSrxxIOlGwnu5BkIaJZhAqJQ0hrZrM7/Upt1rsH6Aok1SlSTGVVXJYPsqw80h480Rsdwk1l1Ony25vpMjySEEMIY6NiRmrpxhVqylAJJmylxCiCqQMnLvaBVtBqPLXLmSmNYV1iZUSpKOcc5S+ESnNY9vdQkmR0NAm5KYBGc9YuwNud+g0uLyxg5PnniB9cEWeea4/aabOH70KJ0ix1qD4GY2sTUkk0gaZvk+WaZV4vrWtp4+e/nns8K+d3M4/uHJ0epttx0/atudeUQDiEXUQACLIn46YzcsmEWarGFnfIFWPsR3S6rGIy7N2OhzjGokZV+I2k6aSClSlg3TUWAyqqlrS9JZPfOyASAXi3MRbyFPOXECG2mbwVBJQfEh/Pw0Z/cE/rPUbtHdtUpqGZK7RNHzENvsWYPdcztUg4DzGY2b6crOQcu1yCnIrEPIiEHB1NQRqkYIQchdh6X5eZyZcPHMNuNhQ6sbKAqPdQGfTdm1oPRaymCaE/IFymCIZYWkG0WemZUBNhkiOVVdcfHiVYZ1/Rnr5PfK8bPfr8ku3fOa28lyf4M1zOxLF0AcIkpKgssNC4s95rqt37uwOfxQHTc/HmN8eN/BPXceWFvFWwVniFEQLJZITDkRi/FCr23oF2M0KjFlFNGiwTCtSpIk0ud4ko21DvOn9O4zTGEpOjV5NkaSYlTOApde2qTXS7EhU4Oq0kRFAxRZRrvTJW8VOKNkyCgZ+WW1VoeTEZcvb7F+dch4W5nsRFKAW29e4P6vmefAEaEwJX0MhRYs+wUWTYe29xTOUzhHy89ejVWsDfjM0ut0ianEmgpJgWpcgXoMOU4sXhyFj/Q7DXOtmnamFHmLrOiQ5wXOO5y3OGdn/1uYn2vT73eRkJ4n8tOj4fA9z504wcbm5my+0IJKBJMwRKyANYKzQpYZbjl2RI7efPgXDu5ZeLAJTXdnuFOU0yk+cyCC6A0dIVOiT6gvMK6FJgv1Fs34DHlWoYDRnKY0TEolRsF8rjs4xXVRrYxRrMykbCRgTMKmhKR4vpXk6suXAsSQmBUeISliDTabPa9HxdKouzXW8knrczrtefrdVUyqme546pbD2QmLa/C137zKPXft5dST6zzz6CbrVzqkcZupWJpMcWLRCCkpwXQRnyFakskyu1aO08tLxJxFdcpkWNE0ivVTinYiL9p4UcQMSK5F1lLIPTHzSAg0saGODSIGqxaLZc/aKve99k4e+tRj71jf2rxLVVaS6kz+dTc6ABIikOWeLM8xxs38AmPpLS6Rd9s3P/bEU7934dKVswv9/rGbb76JtbU1rAhiLSoWl88URYMj8xY1EcrnkPoK7Ww2hbS1PeHUyQGb6w0pGaL+1Tk89/GjonLdGN3njGK80urn9Bc9nVYib0DV8PlUwJcMAMUMmhSpVW/M+jVUdUPZCKoeY+ff7nHfbLQrmxs5L56uSao4bRFLWNpj6K4qraxh5YCntzTP3iMrPPWI5cmncsZpL0Ey8qA09ZSUoHYZKbMkbZBk2NrOsN2GvJ2TGnBiZi6fb4PdTZavgEwQs04TKiY7O0i7TYwGSyJowngPYiAJmfWYXLn12BGMs7I5GN2WYmR1ZZmlXSu4Vj5LGzEhKBihbiKa0mxGwCYCDau7lnjggddlVVkfy7ynyHMm0wlGDEFnJJusEJNiRYEGYxPN+AVsc5JuMWKusJTDwMULYwaDGfUk4uzO/ssIQARUsQIQaFKFFJ68m3A24pIp6hAyXsIPYL0kAFhjfiNJ+mHxYlq9Dt35Nq22YWmXUHRqjClMZtvzNu8jro/xi1hvIQn1ZMJ0FCjma2ynTSocvmvZs9Bjef9hsv3zvHB+H8Q5ZDAijacoSsg8dStjMKyZDscUoaFtrkEa4k0fZ2ZqXBXaTKZ9fN4nOYc2O5TNlGnaoetW0Rs06ZzDFjkuy2m5DG8skQQuZ8+BvcQ4E4asdWBmQ6OqiWo6JdY1qYnUZUVZljNByXvydkHRbbGyuIww6/+zLANVzJ/qCSqQGVyWYfGICsYmXMoptxtMPI8j4BFaxRawCcbOWte/qo2zBmOVVuHpdApsXtHut+gtdCjyEUa4W4TbUB57WQDQIN+ZGTFBEsnMNPVpmDAYWab1mJQy6lShpmbBQBDHtNxkuHMFrxVBI2oDWZqjveLJMoe4CVk3cWjfPFfOnGa8uYY0I1yTMGKooiHVFluWxMGU4D3JTTB+EyMlKVWIaVCTKOursDOh5QPejQhNTUxDmmpC1pvDIIhzGO+wziPWo8ZhnRBCmNm9uZ0NhRBpQmRjc8B4Z8zOxibTnRFN1dCUJXVdUWvE+IzO/Dwrq8vs3bPKwmIf03GIKmoMasFIAAHrPE4CRgSVNtYmCrNMcGuMhpfJTECnzApaq4QbotfnGtELKZGaQFPVBA3kXhArZMZgTbQGvR1eNgDEpaBCSLNhSesctmhRtMHaQCNDomEHLfujsmRrZ8xqP5DKAbUMMKpsoeQa0NwQOgYrhshFdu9e4rZDDX/83A7DQYvYyIzeTaQxQgyeempZD0o9P0dnxcKspsaYhDcTsCNivEoUT6hKNOaEOCSUAzqLCxhxqBEQSNrQBCFoA3WaTf0ghEYgCOWk5uknn+PqxevEJkKtUKWZAmlm08IhRWqt2L60w9UT5znd8uy/aT9H776Zdq+NikGtYkRmOoBtEXWIcZYmDTCaKExDs9Nl/TK4dA0THWUN4pSUGmLk/r2F+eWL5V8y1JnSDEzGgzoIhroJiAFnE362R+ZtxzP368/WIb4MReCs9UlxJsmOxlOoA5OJpUpKZcK6ivk7BPOv86z34FxvkdwMiJXMHt2WDCEmJDRUkphbNMwt5LgsQl6x59gyhy8rp54RqObwkqiaa4ymW4TUQdIyMcxT6QrjJmBcQ/ITcg2YRpFkEScoDvFzqGthgkFjg0mJYCxOoHAymww2DhMFJRCtgLVIzNleH3P2xCXGF6fMxQ5iockjwSvJCj73oBFipKwjVdPgjBCriounzzNKFTffdgu79q1hMouzFjB441ArRGZzht4KXgO2JVDtoR7tYGIgdiPdOUsrT4xLe5cYMfAXAaCqCTEX68bsG+8IbiNidiriNODSTHmsRb45qS5+wUOhM+FhJn86IzNhLAkpzZpqk0BUrZE0dML/OR7tPHjhaknfJxY91JVQu4idgIZIsInCdWgyi/eQGNFd9Nzzug6LnZpqmCPqGE+mXLwy4uyZEhQKVzKuLnHleiR0GnpLLUKqQSNyw/hJCqiQbghNRktyD51WlwQ4U83OXWWWdcXN6oAEcTTm6Sce5drZy1gVBMEZg4qZPYMwQcSRmkAKaUbBGlFrEG2I04rxiTPsbO7wmtfdzZ5De0k+IlYIdYmIId6QlGuN5DahzYTNQcX4+iaGCo0WbxPegTV6bJr0HuCTf/56PFNSv7YtH1T0PhF3g50MUWU2thcVhYjoy9MFmFkWRYBWltNvt6AQ5jpK7g3O0DOiR62Ez4IM89ZST2yOZYQzFcqUXBwmOZoRDDY9LkuIa2gXkOcTuvvB1zXPPHKJclSgaWYQ5XkEhBAH7IQBO5MMqham3aafeYwZEs3whmJrMN5inMM5h8lLxARMLkS1BElgHEk8uBY6s3ywKXFp/QphOGChndFUNSlFrFgQnSl6YjFqkcyTbESsmTmKAskkYhMJEdJOzanHnyfLMvYc2nNDQJpJ3tY61MyGWg0R13IsrhygHp7G2zEmKbt2dbiyPmRzJxRGdO9fvk+TQlS/2ztDXjiKdgahwOc1ygQBMuV9lTEbn88PeGkTQbO9EjTTyPbmFlsbFVoI2zuWpglItFcs8sfGTQiNHW8NtnrXfZ85E4ntgjxTqtEIUynsRLY2t1laF1b2WBbmHcZXFLnH+Q5bOxucfCoxKWeGRpkK6maDSVWyXY7wwVFKj3GCfUsFKx2PpgaRWRVugcIXNzT7LVK9jTe78KaD4m7UHgYjijMWUctwOOD0qfNc3h7TTKfE2NDEZnbtxc5mCs2sxeu02hgV7A19QNDZHVcrEmd7FbfPX+ez1SN4l7Hn6B7IBKdCMhG9MWro7Owz270F1M4zrbdpuUS3m9NtR4pCZdzww/va/N6FCf/J5hI7c7fzuirZ2dnE9rdJg5LhqKapBEkGqxKeLT//j1a8NABAZZjZwVnmmFuYI58vuLiYyP0WThSnJA16C75uD4fXOVuNsWkJv2cv/WKClatkOsYjuCYipSWMC0rnmZ93eGlozSfuvLfPcHuDy2c8JnpsHsncDqpCXuVEhTJUpAmMWjlLRYaVGpPS7G5PSqohaEDNiFhvzTwD50g621bmrEGIOFFoLJfPXeLUyXNsbU8JdTN7PwmMRQQ0RiQlikrZGU5Z6vXpFjmS0myqWARJgibFYPAYyvUxJ554loXlBXorfWKq8c4TdeZFCCAqtDtrFN097GycITLCOVhczGhdm+BL9/qg+v+29+bBvh5nfefn6e53+a1nvefuq3R1tVqSsWVbFl4wBodgin1filBhQrEMhYtMEYqimABJatgyk7CEJEPIFIODQybsGOIFiBGyJUtXkrUvd79nP7/9Xbr7mT/e35VhIGMZycYydNX55/7O+d337X66+1m+3+9zHOJfUDsVabCH3XbO4mKf3oInaotWe0KaehpeZfzC24xZfriOOy/9CojmnKrVqvAynVSMxmNKWzCeGooqAHYxarzdGLk7auyLemZ1ZGeacWnSY6qGBTtj1TmkrvDFhI1pxd7OhLwvrB5wLO5X2gsVC8cWufnu/Vzd2mC25UANKiWGpjA3rSIhKFmdUvhF6jrDWaGaKtiKEAM2gbyVknYSTFqTZIK0Woi1OImodagYRIUwrLhw8Qr1aErPWGyrBar4GOZ0IQELMQYSa5DEYBNYWmjTThoUcZP0UaragxoMKbWJjNb3uPTcBW7bv0ba7hB9jTMGQ/N3iYEka3H81Bk2kis4PQchowzCucsFO8OYzlT/5eEWX3Jp9vGkjlHQOjIaT9nZ3UX7O+iwzWBYUEw9qKBKP6q6l3wCnM7cAui3OZAkE1qdDouLS7ilQKtHU9o1dFH9N1H0KChETxUnXNzaYH06ZDlTVjM42u2xtmLpLwzJ2MOWSqoZViKpFVq5I80ip290XHw24eEPSwMJNwbRSLf2lKmiMVDpHjvTXfppj+P7EhKZIqlHUkPWdmRWcN6j9ZTMeBaX+pSReZUuJUQHqoxsYHN7B1/XGDziHD5EPFDXnijgMBBhNiuRzFEWFepr+lmGxTTpYSPUoSniOBxNEdDz7EefYP/Bfdz0uptQTbE2I4QmUWQkkiWGJD3B3maLelJjbMryap/lxSEb6yWFNW8pI2+D+ndeiAIsmBT6vRb711ZYWlFKm7OyOsN19tAR2KBqGqDaSzOAiI4r0Qdrwg2Vj5QzT+194/lq89ISLKnhVZo029QT8XiCbqPThJ06o6hahHQZL8uIdpEqoNWYKAW1BkIUYlS6fcUmGTe9qsPFy0OuXmhwfKHOMDElxooaQ6xS/EJKbO9jEnIkbiLRQ8wpbSAGaGc5Sadgd3IJKQ4zqS2h8iS2DRFSq1TFkLIc45KUTFNSMeA8apUaCNEgahsgkInUJpKIoWVb7OstkxnX8K+MISh4X2Ol8R1VDNNBybP3Pcbhw0doLfapTMCbiBqPc4ZpCIht0+2fYFhvEKmQJNDrKq3ckxQ29bWc+PNrUihIgElZUozHlKMR03HNpKoZxsBEDZWPvytJsvOST4BnyhBOZ2aEeBJraGUZaZbipCYVQ2KEFAs24I3BaLOQCKgRgkQmxZS68k0oFALThZpjSykrWYJOKhIn+IW8ybNLgbHC4eNt7r6ny/t+7zKDbYekbdpYuuUMpgWhVsLOmD2zTb7Ps9DKEVVSdWRicKnDtSNpVpAnBUu9jA5diqoiwTaVRSzVGEzQRmwiRpyJGEoCAUGoxGJIcGKJJuCMxwg4recGpyhClAapowR8iFgxSFByaxlf2ObyU5e4482H0ZbFKhiTEFOL2khLuoTB9dTlBqoj0lw5cKDi3MWaSWGo6/BNJ9rJzz8/bVrcucxgrSHJHGknJ++0saZPf9mTdTyJCziV0QNVFV4eJzA2/DytoS486n3jQUtTHWxi4mbhtaHUNjUXbYQXIlBrxc5gB19FXLKfpcUePQuuKokTS7ln2dusMVbI2zXGDDh6dIXjx1POblYENomSkyVC6Wo0GqqyoPCeMjrQHkkIuDqgRUWZW1wWMXWBrwZY9fQ73YbcEQESUs0ofU2rMti6pBWnOPUkEvEEvFjUzIEhYrFBcSFgI0jhKeuIz9vgUoIGzBw8IiJEiSTOYTWQUXL+sQc585qTLC/tx3nBGsvEKCWRYCxJd5WaNhInWKN0+zmLPcfOZknqZF9VhpVrSZ2ytG90WVxV1YbGrpHJdMLeoGQ6qQiV4IMevjGR7PFay5euD2AMFm12u7MgQtDmwb2BEiXM8Xy5aT6PITRwLJ0bgigihpKSQQVXpw5rWhxKFnBFyXBTCSKkrotdSWh1odWCV916jGJ9zM7FBG9bTFuG9WrAVj2hspbEOqRKCa4NcYLUBVEjPofQsYjJECpmsyl5L6PZowG1SiYZLZuxaA3G1CwTSZpuE9RNFRxpqKSEWCNRcVGxxlDXkTDaQespmjuyrEuaL+GyHFWPGMVZg4kNfGwymrC1ucvqsSPzHWxxJhJpE32kt3qUQydPUgy3kFgitsvVSz02LxWMJ3rKGXMThE2ARMyaizF3EfABE5XMJvQSaNkJiRUMeo8xLEDYeEkGcMo5F6Muok2GydcVMURUmsybV/AoPjTQaI/M1TYihAaadC07FYl4HRG2twmhjyxlLBxaJTF7mGJGtZczaeekzqFUJDawutrltpv6XL7SYlY4ph5aamjblCkednfwJJCmuDQjE0+MBuuFWEeK2RQZXaEzPMe+A2do5a7hDNqaRAIur+j0K3S8i1QQSYmxgaWLChrBRyWG5iRTGzFGmtayE0FngpIQ2y1kuUPazzCpQYyS5ZBl0O0oRw+s0F3YRpIxwfSBpKkKBrCpI02WkCRjNByQSI2xHVaXWvR7lp1hYCqs/jm9JhyKkyafYEQoZxNmowqqiIkGjbrXYO9eMjGEZYQvSMWQOUidayxbFdtYI6m1Y1UesKr3pGIMoqhtjjmNClYaFS+TgEaqoiaWPVQOMgolCZGEQDny7K1H1HqWnKW12CXJI0dOC2ZnzMalgs4swY5nhN1dXBkoY4a1C8ykRRWmJLHCicOOKvI0stByGB2zPblAvn0R43oUk0gdYCQFaVLzpi+5FTPL8dMx9dhRTvfQEIh1pKoiZeGp6oCPNc5G0kQa7SDApRaXWdJOoLWv5uCRFWwvwbQi7a7QygxpIiS9Q4R0irohRewj0WHUYrSpQAZt0184wqSzgtXLlH7M6ophsWfI0ihi3c8eb9uVc9PqF1XjZYVZHUJrVlcUIeCyNp1eQqsTcDuR1Mf33l/pS3cCvYbcgoniCCFQ1yXj6YQ0h2JmqauIBn7eWP1hifq+aMLrVOdU8mbPEIPSwD5B1GHimMHgMs8TKULKyWVLq5cjMiJ4jy8yqoll1iqgW2JXKhZfrZRLnsGGww4V1/G4seBnAS+DJoJoZ0gwpK5RBsmd0E4SutaRy5B+15N3FinaSu0TnIHMpKwdfT0unCKUY2LlCf4SEkfga7SegS+QWBKYoa7C5a7B3FrTwNFQbGop0y5Z+wSSLVDoVdL0ApmOUelgF+6A+jiBFfK0g0iK0w5CINqKEHK0f5JnZ12oJngNJDaj13ak1pMbsz+G8P0nMvt/pVb+LCDbIcYjvvIUZc10XDAuItPKUwa0jjz2skDCnLNfKRLbmEir7+gtt8g6OXkvIe8INjGIkUy8K6IL/9Zb8zo180JJjNhrVOb5jjE4VAuqsM54ZpmUh5lygLFsoToilmNkD8S10GTAzE2QxOJ7GfQNF57cZn2YsFlGhuOaWWnJOykShaTKCKXFyAhsZEZGQKlKxRYXsb2LrK4eoZoWzHyJGANaNqdZ7GPpNKVWm+NkSp4V9JcKWnaAY4iTKVG3EVOiSUMpt74NdYuSZXbKNfZ2DhLo0unA0UNDEjvAm5RpucSsOIzLuth6hjM1QQIxwkxmqDalb2GN2dji0oo0CfQWG8EHFzwmxp5GlanKQkckceJo24RO1iZpdekseExrhqRIDPE6wstQDJKofyDEArUt1YCPFZNqyng3MhgmVF6JuC9FzD+G8HtR9T4Netc11S2ZK3xEaRj0UTxeDRIiWuyxt+fYzldIg+NQa4HgJgS/R4hTalOykqRkfUMrr9CVLpJFdrYLJrOEYqbMqkiIgbGtyTTSSR0aDRqgKgLTcUmSKdnMs7d5iX5nG/UWjYEgIBrAJCANZLyhQfXwJhJtRBC887TSQG5mJPE5QnkFqgGI4NP9xNYhyngIrfsYm2OzlKx7mFbnEKoPYpiSSZuY9qhtC4whNXP9Fpc1xBMgy/Zz/MSNPDu7HycW0xYWFis6PcGNAhJiLsJRj94ZRPdPy5qdvSHanVCPhPEookERQRU9/7KcAGhYd0jIrCHrQG85o9PN0NyQt2xT5zZGIsKTlb94fWq/RYl/ZoS+nVfMjApOaOrhBLw0dK/opwzHG1zZhFQPsuz2YZIhKrvE2qMzh5YtxCs1M2y34OhNPS7ujNl9zqE4ghgGk5rEVrTyBIfDSANHMyGlrIXRKFDIjDJe4NjBAe3WAVQM3goJEWOTxmhiE1IFIpJYSg3UwTApwXhFYklCF61OoLEEa4lVj8IuYE0XTRxuwRKNpfB9zl9usdiLEB8hTSb4pMabGmtaBOZwsYZaClGJ6pB0katbAsUe3UyIomRtwVmw1vajcIf3/sloGCatbr+3vMzCck5leywsetJ8RtRandHffzHNZj7xCSBgA02xJYnYPBKo57FmQo1Sx/BBjdeEdXhCkO9C5EdijCcj2oAqG55Z4xOIRaxpgCZaMylmFKTs1QYNXYwfo+OSKBabFUQRbNchqbJ2ostNZca43OHSFYMVIbeWJGvCrVktSN3w9SpfUahSiyWzNTXrnD93ltV9lrE4orGNJIxNMCSNQJTGBgqOIhgQOy81z3F+LKCyjDaStKiPiHpMKIlUBDxRAya2SQBv++xfOk6shfFkj9opabaMjxaDYmyGSQJGIEZLd/EQqwdvYHhxiKGgv5DRWwgYmaHRPIbKb6cueh8ZTqqyvzeakIynGN/GOnPNcX/RIsCf2AAUjBhya+n0oNe3tFJDTYJJHCIaMPzus3URAJ4ugwL/8WTGn6jIfVhWRRogCTQAkjpp8tmIQUOkmE149vzTDBYSrj/YIl09iJUtQuGoJhAmnrzVRsWStgynrm8zG81w+ZTN7UicCXW1y3jSpr3cotteQUKJE6G9mtJda9Hpt3DO0V9IOHH6FNpextoEK0kjOjkXjIw01KQmidU8qGqD6ml4Ap4oSjQgRrGqJL5GUYIVKq3QaCBanPUIu9jYIU37tLLrkCxD6CChoaZFSXF2Nq845lizn6XVY2w+9RGilFRVw5iqfSTW8l+f9vX4ZE5urMGlGXm7S9oSrO3Q7iSk+SaClxj4cuCBl2wA0czry9aQpUqSW6xREDenIEmlSf3+/y8AOQrPR+FXDfJd12Jq5vVzNOJRjDq8b3R81AYmegAvx6nqCakpmYUC2VGM1NR+jO1nSGZwRM6cylhayrl4pWb9as1zz89Q02VcKFVVkIYpzjTwiGnM6BYt0sSwVz1G5U7TXTpJO89wLsOZhMQ17yWic6KqYOZ8QmOEYE3DGzTXVEVBXMMgnmkGWhHrGd5H0AxjlCKWOGmT5LeAdIlVD2KFSAHA1HtmVcRKgYRI8B2iFiwsrNBqr1IXA7wUtDuONBdkYu64njwpY4Ez2ghamibE1qgYZ4iiqKoIcuB/BCv/5KKAWhHjUfXkGMRGvNb4MhLqBA2Rv4rIdq5Aj+bybIzSuCWIzMvxTWq5SRxppEm3VWHG3mTEuY0tyuGEG/anmNRTVyXFLJCUgotKJxOSdsHqSsq+owucPNLj0tMz8nrMzmZFGnJWen2sAyMFJlXylrK4IOQtSHoDVrOnWV5egWyF1Cmpa/D1zgpim8WHZvFFZJ4RNGAUNTXWzm9uE4lGCKLYaJDQwNmMSRuquGagDcRbrDSVQyyCo1Klnaa0csGYdkM+lQyNlrX+LWxf/RizS2NyZ+nnkaefnDGe8NZiJvdESWonYVl8pJ6UzCYluQawUMeaBs1gXn+zTfofC8XwJRlAR4zNrUorhY4IqbWkuSE1Cf08pWVMlvjknVD+/F+uJPJzqH6IZuMvxCjvEuTteMV4vQjh2wsNbzQi/8R4xMsum1rS37dM4RdpZym+vEpZKJlPcaWhmAWC88Qsog2cjyKMkBSmlWCTNkUVMLHCuRlpbdGZRwsoQ03WCox376MoH4+rtAAAHRdJREFUrmDTFazLyLMca67tbkUaXvfcbBsmcbOgTfbTGIOaxrdJWymJyzDS4AKMsRibYGza+A/SaA0ICYk4NHrq0lJ5ITJ3Vo2hFsFYIdYz4uQqm5tX2Th/CWcShmPHqPIUnlbhzTHntEqitDtJznK3z8JCgg1dql6XTqeNkRprzREnNvtEjuAnNACDfGWm0m4BaRD8tKAcBcRn1BNFPCbDrf1VJJRLRSw+DmpUDrR42lj7XpBTojxydRp/92DbthFUxEqIkbKcsD3rcWGUYlRZbvWYjqZUMqQzMbSnjk4VcauGJFe6y5bjN6yRtFqEeoqfOJLc4pIUR0WCgAZ8WdLuWHw1YTaO2HITlwrOGirbEEEgNtRwbfyAa4riRuxcpAJibFRAms8bxxBjMK5xao21GJMQtMEJmDnszEiCFcFgCL4RoVY1aEwxNiFKjRVDXZf4asxKf4uVWxZwdo1L65HWI2OyzBNqRWPsWJTZZMrm9g7TbEgmMBnWFMWQ6AOxDu+Ozmy/5CsgU9tONEquhpY6UrXkzuFci3aekLkmLfxixtUZzxzsypdF4k8Z5Ffn//z+CL+HxC/CKxOUSzt7+LqHLOakBxbo2ClxMiA1CbRzGn03iyRCmkLerkhp4vStKeRpjzRJyDQlEUhTR+ag184xmeISSDLFZY2SR4wBjU1lzSrYGHEqc70fnZtvwFeREBqAaIyxwfYlSZP1NAExEeOahRdjEOMgygs8P4Ni5i66MQaMEELaGIqUBBXG44rRdEZNwMaAxgHbm4ZqGog+7onofcbYn89cpNNusbi0QG9ZSKWH62d0uylpTrSl/+1H6uKlYwLLUD/dFuOpg4slTCczZjNDag1VAB8DQcOLbjxxZezP7mubt69PmzTVlWnYWW7xLarcmxm5bqqCr2ZMZ0Nmq8sMaWOrKcZHYllRzaYMdmv2doTOipD1DFo7UslYWsjY2gSTdAkhEmKBsRW+rqhnwngvYjOBUQDjsU5xrol1r3UbMY07wNxXfSFWjwplFRu6ejREVfx8JzddSuZcvflP4zs00K+gsfkakTnlTF9whgKuQQ1bj9RKWQtltHiEVA2UU556umR3y1MUUVSlBTEpgzKZFkyGY0x3REXKYFhQ+Rq1Ymr4EuA3XrpGUCJ/rM4UzpluK8toWUsrSzE2JXEGZwVrzNfc5ro/9rAfv6gGUJvT+BeOjJ0ZWysd853e8AsKxyOR8WzAhfV1JHTR5SXWugZkD18NSWYOTRyaNxDwPMvo9C2zJTjnCnbHE/Z1UtK8i7AL6vCVpxx5bGlRFaykTSjqBOMEjDaIYTFEaXwLnfMMxBjM3JFBFGMaNTGTNMAHO5eCMS8wepssaJI2zmCIATENW7iJhxv/wTRKGA1S2AQ0QNtblCbysGoYbCf4ahvB4hxdH+Q/RJXlqYmMi0A59SwVGSEIo2Ggiima+OadXo5UcBEjmVdmlbA38QxHltks0sotNgq28ejbGvUldSENou/VwGtt5L0q3DGxBbJzhSQ5znL/AGXlydwEqYVJWVNMPcMh5EuOtD3FlMr6DgxLg6b7KekxCzUJAR8jWgUmU990CYlQB2lqEybi5kmpa0SKyJxgoc1iqvLCjw+RGCEGMxdhETDhBZSvyBwME+efSXN8yFxkQq0gInPlo/nHRpAEgm8kiEyExEIZhUub8Py5wN5MKEJ8t1XzD0v0K2ywv7w3DOxuBlpZxe7OBk9/TLiyPmVcCDXcfUNi+k/W8aVFAQFQY5FWgmkLvX5OK7WNqlaImGhJJXkiigReQvOUvbEqsLm/Y78Wsd8eVN5WanXrYLpjtyYt2ga6SZvcljgzRkQpplAZQxI8i3lGf6nFwkJgdxwIkmKSLonpoXGCipKm8y4j0qSmowkYafD9zlgMMkfsztk18VqiVuZ7VgixuQ40xjnYBYSmJm9s89tm7lBGDRg7NyCaWL2JNBqeRaM90KCIEIg+zg3AEKIwrg0+TChDicfOovE/cWHmp4fy9GkjdlKH0NkdVfRmFbikSa/jEJuQ2OhVglJXLxkPMC7rcHZcy91Drwwnntp3SDop6gwz8fU0Fj95NlYvS5uU9Ul4AsK79rWyXml41+505wefuFS52XKfkwcWWLYJbU3wfowzHqZNZ4+iDI10izEMBtsEryRrCbaVEkMBWhK8xzQAXyKNuAUxzhk+TfrXmmv3eyDOO5EZ09DgvEIVQdUyFx1EtTEUMRGRRktA5n6AXsML6rwwJsocMPXC78lcr9CJNKAZNWgUMCnDqWE4rCmrWGo0PyBqz4LHqnxU1O+aLO10Vtbo7qvZvDrmymDKpYFnexYZVuG+Z7yOXvIVcLZmepfw0wX6+pAlJmlnBDGUM8/MO2rHn1RJ9X5e5vaPm7NytK+V/njt5W17k/oeYwKkFfVCiwVT0U0zcinQOmBrSz31zKJjb1KxVxSErGZUO7IsJ3UGCZbEQZoozkKUgG22bINTsE0MH1UJIRBDbMQr53d0U69RfBO/oXPdoWtimo1cbBM2QsMQappS+XlyvqktmBfyC83fW2MbY4wBjUIdDKUHHy3jwYydkaeswnsV/tXFspH8MCYFrZmVNXuTIUtFgDzBLqS4RcVPCyQxb7ouczc+Mykff8mYwAJ9dhQjO1XFOCRMA0TtMSxSxsqlx0sKPgVjc1ZVq93kG32YvmdjEO6cFnt2u52xmNSs9ByJnYFEjEuIsWJYTlkfRcbBMd0bMp3ssbbo2L+cstJt4yRiJcydrzhXBm0qlnPKUJOT1yZkQ5VgGnUQECQqTdG4SQRdc/iaA6JRHjHXIgpjsMbMU8rSnDLa+AKNSun8JJh/fVQl0hiEGGFWwuagZlToehT5jvPFx/VeRGwwVI+1UjnS7zkWlhzDcaSWkkrrptDmOaKqZ4CXbgA+cVRO0MzhWh2cE5A+xlmiSHe5JW5nFv2nwgi2xvW55Y55K0zfVVby3et1ubJl4NwgkLp5dy8pwUd8UMrYaAxZnTIhMJhEdoYpK31LN7Mk0gg/WyMNoWM++YjBJgFBcdqQW1QUrMW4ZsFjMMRoMGIRbfIARq4JSgdCmM11BnlBNVSaFCJibAMVl3lvQ9NcH1a1Yfro/LowGeNauLQ949yVKhQ1/3PUv6j4pRFvoj/rsG9PTIoTKKdTdrZK9nYi0wlUUf6glbg/frkEIkaTGXs7g7A8GBbs7VmKeI7BREhb8veti98I/BKforEzieNDLf5pHc1vzSS8J4gcTaIh9WojBJFGuyBGDVHivUZimWq0EXu3ryWvB57tYYM9TJ0hS5vQDQ1N6lYMUWus8Zh5bR69ltRRxISmDtDg3LBGmkUUafQEjWBQovqmKCJgbVNajqHZ9dY0YFJjZe6LNMkg25QYG6cyeIoYGBbC+p7X4YRfi8pvXi4/nmlbbRmpzOgbs7b5R90lQ61ThtMSJCVNcqytMDaQWvf3VPhW4CdfDnLo0yU8MA18fqBFv9em35pw15v6uPR08tu/+ewPfezxnWJ7W39jY5fpp8IILs+IEO/vd5PPVXTRKJ068PUGfgORdVEDUSPIU8EEXwWMmvg5wes3+yhfLNhFE826szZPo1lwNqLBI+qx1nZCCC4GAPEKE4WWNZqKhPmdDTFGYogvyDSIMBKDGjPHBswjyUaMck6OibQFEmGOMm6SC02/QiM0KR8QbUKKwkOpVku17w7Rf/uV2ce7iKy1JEsS+zXdxfizn/PadufzvvAAp26LJB1l9+nA3rRiVsdYR/0dlfhTBnnkRaztixvXtc2XHTnGu7/0K/Yld785J18ZM/aBcrTEpQuB+x8Y+Ac+Wnz04pXqp/b2+O2dbR19KgwhXVw+ICKDcnf7Rffj29d3C4CNXmtBjEuMdSZAiBiUOsrnoxxqjmEuWMP7a+UNwOn5jt5njfuKGONMVX9FoFaYpUZ/3RqCGmmO8fjxAuy1bF8d5C2CeYfCm0W5iOpvqbAQha+x1hmJDXhFRBuUUjRBNf4yov9qfRrGAPvaae5c/dZ9B+VdR48m91x/JsuOXVexdiBhcTGAb/HEQwXv/60ZzzxsHqlr3vBM7ccvcnO/uHGilbh22//AqdP2h9/whtzedlfGoVMZ7a7gnKWsljl/yfBHf3w5/ukHt3/r3OPxh85thbMvZbH7S/39JjHfpiSnizL/zzi+odPN35A4niunk6/Zu3J5g0/DWO0Ysca4EKNuTT55X2d/2xnAqmrcmIWw0hYRY5w1DokRE+Pcb3B4bVAnm7OJznf9db0Fvv+W27vf9pa3rbnbX9VjcaXEpDOKUrh6oeLJsyWP3Dfk6bMw3ZUfemha/uiLfbYX3T5+z8fYizw43OHv727ogel2iSkUp9DuBWw6ZaHjOXbYyXI/P1PX1Vd223Gymusz/crKjtdPOk/Q6rU/L221/42x2Z1VcF9v0+TW3mJ/McncseF4eM5PJh/+dBjAtFYmVYzTWuNf5+8nddRJHePEN3f5rIZppXFShjiuYhzVGke1xnEd4rSu49TXHFrE7l/i9tV95jfuuiv/gre8tWtuukno90ZYM6CYCE+cHfPhDw748AcnnH9cmOxGH73+680YH3+xz/ZJp29vSdN/kNvwb5c6UfavKYeuT7juVsPR0ykHj3VJ+wleYTjq8sxTxPv/aGP46J/uPDVZt/dqyLSw5ldHwd/3fDn9hJDF/r6lDGO/3kfpVnWGSaSdpPIN1sSna1/9w9mVjW0+y8aRRSRtc8uRY+n3vfb1i191x+3L3YOHAlk+xoolTC1XL8145KEZD390yuXnhcGWbGpgU9W/G9WfeMK/eD/skzaAO6x5jYF7s0Ytlm4Gxw/B8RsMJ1/b4/jtK+w7Esnajsq32b7guPf3z3H/H+9w9ZywXbhyEvw/iz75hcfq2dVP9v93C0sOCer3huGzbfEP9VlYXJRvPnld+mNv+8JjvbvuSVnb13jqs5Fy7qmKjz0y5LGPTXn07CwOtvRBjfKBUCU/L4TnVDU8VflPKiH/SRvAnU5aivxhYvTuVIWWCsuJsLAYWD4krB4VDt9kOX7zAr2DikkqdJazd7nF2Y8OefjeCRfPR7bH8U8HdetHQkjf+0TYVf4Wj1MHJeuv8A1nTudffvONC19005lE9h+ocMZTF5bBBjz1sSlPPR546omS9a04m5R8r2J+9Vzx/1/sedl8gBdAHRG/37qPKNylUQ8EgUpE6sLgd4XiimPncmRUQLuVcuBQwr4jsO94wnU3rXLqyAIaC0az+qif5l/qQri0Enl2g1C93BO7v4tMqs/chT/WxS73ecOhI8lPf8E7Vr//a7/u4Jm3vbklp09ZFvOM8dWEJx4oOPuhIY9+uOT5pyJ7uzIN3n537eO/P1fpS87A/rVLuLcntq2qrzcSrVPpJmq+yUW9J7VuOUm9XdkvHL3ecNPrcm6+a4GFgxWkFa7qMthKePyRKR953x5PPujj1XHy/wzU/MiT4+nZl2Vie/m+iP+2SPg8xP5uIH3f+nD60MsSEXSNFSFujuJf69Q64qzppObWNA1v3n/Yftn1t7Tuvv2udnbTLTn71ypMFZlsWp55ZMTZ+0qefLJmbwiDkWFYyayo9bucif/nk1V8WU5NeTkt+k6xR6yRv2cl/mjmWM466vYdEa6/zXLm1V1uuLnF4aOKTT3Rt9m4IHzkv095/wdGnH2sXh+M+epzU/9HL+UZDnTcWurMu63jLQoEtdSYPyi9f+fusHzRJauDC+1jUfWrVFUaXT+upXnfYqz8l4tbxb/7ZJ7rOsFaI8uk8gOra3zr69+4uPjmNy1y4nRkYRUkKjsbM55/ouSJj0w59xhsbkUGU2UwgYm3szKa7woiv/RcWcSXa83sy2kAV9HhPsODiv7CLMpDszKbDAbJySuXQ75xuWSw3Uil9Zc7JP2C3lrFkVNLHDrWo9OR7mxUflHfk+Qiu73E7QzrT87KD630UmPte6yRz7Pz5lC16rgO8dcU/ltRvni/cbGT3wN8r4jebox5lbX2VWLMq8RIH9gdzfwfvpjveb3ryAF1t7YtP95f4udu/5zOm97xxftb73jnPk7fFmgv7pKFyOBC4LH3DXjo96c895Cws56zNY4MSyiCvVDX8o+j8kvP1mV8OddMPpV33K2mazTVdxhb/odWHlcXF+H0LYY737jE6TscS0fG5C2HlG1mm22eeTTyh++7rPc9UJYbm/YHizL8zHoZX/QLH17t2xD890qMJzpZ8l8iaBHCXlH5h3ZG1Sc1cQcXO6Kqpsn5z6t9885hqqobg/qv/L4b8lzSEJOeyFELn2uQb8xa8bX7r/P9O97Q4q57Vtl30JBkFT5UzPZq9p6Dcw+Oef6hyMWLwtWxMlLYjeqLwG+C/T6J7twTvnjZneVPqQG84OVm5oQxfE9qzbe0urp89IThltck3PKGhJtu77G0UNCiJlaLbG10+PCHS973h9vVw4/u/ZPd7eQXzu/VY14B47WSCC798tSGf943YbGd6erKEbjlnsPc8bl9Tt1Q0ultI4VndrXLlcdLzj24x8bzkYsXhHMbwkbh2A7K2NS+NPFHifJjz9XqP1XPbD8dE7MbdK9n3R/MvLynrCVOhvQH27oyHAWJxpE4iwEqO6bdDxw7lnPD6bbNcz4vRPOOTP2WM/LEqPjMixZvSVI5kRtZ9npyweoXLzt+4USbgyf3xfZtr824+4u6vPbNPdaOVhD3qHcjw2eEc/eWXLy3YPsJYfuSZW9g2CkdY28oNBIMHwjC//Rc9alb/E/bCfDnx/FWLn2xbWz95Ukv/vTK0bhy3fWWG0+3OXEzXH9jm8XlgGCZDJZ59inPB963PvqT+6a/dvWS/z+mg/jw5SF/40mg25OskxvzDgdf3bPhgKnimY7TteUV5MwtKa/93GVOvColP9hA0P3Isn1xzDP3D7n6qDK4aJjswW4BO6Uy9Ya9aJgovtT4X1X0XQ8Ff+5T/R720z1xA+/ZqOt6owpnO17+UzXgluGWua7YSfGlw6kjSYW8pbQ6gf0HE6473ckOHFy4sy7HXzcehTMteK6NmYy8/o1E+a+WdN+C418fSt3/eiIxt65pPL4vD92TZ5DXvX2JN37pEvtvr2mveVRhsmW5+kjN+XsH7Dxs2H3WsbebsjkTtiphGJWhahyKPlnAD0XhBx8OfvfT8S7yN72TzrRYFcuvLLbl7ftX4PBx4egZ4fhNCSduWmRpTcBV1FXK9tXI2Qci939oUpy9f/Zn9RX9bmtaj5wtZ5+Wu+FGx6GlzH5zJyTfsaocXTNRWi1P76jl+O1LnHlNl/3XGXRhBHZKedWw8VjJpcdqdp+HvavKYE/ZGVt2amEYo87Q87XVf1eqPO3R337Y6/DTOf/2b9oAtj3TRZHfrUtZmezZM7NRkk4HKSYukyVdut1FFpYSFpcqDqy1ufH6fdx0/arb18tOzMaTb5iM9At7aL2a8PSW51NyX36OGHM0SU63ML9xyKVft2pkcYEovaXIibsdb/zqI9z1zmX23wat/Q2sbHZZuPKgZ+MjMHgsZe+KYXNkWR8JlytX7Eb54xnxFyuN3xPgdx4I+vBGfLmhta+AE+CF3ZVmRmO4OUn4ylZL7+z27DsPHle57c4eN726y8mbEpZXIfgB5dhR7HV5+rExD/7ZDg8/FMKF5+OD0zL/CWz/Pz02WX9ZYuXXmVx6Yo91RL+nn9tvznxYdSaincDqTXDdazJu+Zw+S4cDtl2gVWS6pWw+VbP+scCVp2D3irAzgK0ysFtTTCv92Vrtz5ZiLz0Uy+Jvet4/YwzgL8TS1nasdT+XpfEbDh1Sc8cbDnHHGxY5dUOL1f0T2t0RznnwjtFWxhMPWN73B5f5yEeqcmc7+ZXJdPYzubOPPDT762fM3oTr9BP7ZcuS/MzhLF3p24IoFeZY5Pq3LXHrWxdYOFWSJMDUMN0Trj5Xc+mxIRcembFzPmFrx7A7hXVf6U6M56vIP0ui/uKDFfEzZa4/Iw2gSai0O6L17YbwD5ZW5RuPHU2yU6fb3HCr4+SNhgNHE1yrJgZPmLTZvBj46L1DPvqnBeefjIPp2J0t6ux/marc94QfvOio4TXikkUjX7lqzbvWxNy5psHkrYhdgdWbEw6/LufgrSnpWiTagrBtGD7jOH92wvnzga2NwNaGsD2EvVp1pvL+GfrTU/SBJyq9/Jk2z/Yz1QC2fV1vh3ihp/pbsTDb4/X6dYP1qj3eUapxggsdEunRcil5Z8q+w5Ezt/a4/Y41VpbSPE5mx+upfJX3/oZ9mXtkvfafUDXzriQ5lRr7E0et++Hr2p0jBxyyulpx7O42r/6a/dz5ZWvsuy3QWW4hky6Tp1M27g1c/dMZ4485ti5ZdnaVK+PAZa+Tbez/XUS+6eE6ProdGH0mzvNnrAFcG3uKrhm5X5X/XM+oRzv+ut1LRXf7/JjB+SnjyxN0FhoNgFZJd1E5cKDH/v1CakaZzOo7XBG/8JSxLKPTlcRsbvw51uwZtyzXR79yUvjWZaP/cp+Vzz9g1KR5Qff6klNvbXPLFyyw/2Yl9Mf4WLB3rubCh0acf98WVx8uuHoucGXbc37ouTqNbHt9bAzfUVv7k49XvvxMnl/hFTQ+p+FgvC4XeU+/LYcPrWUcO5Jz5ITl8BnHwVOR5aMZdD2aKqN15cqDwpN/MuCZB2t9ZoPhei2/vuvj/z6t+ZhJ0pt6mn3PQew9h52eXskq6SQli8eV02/cz6nXpyycKFAzI40J9Sxj59nApY8O2DlbMr2csDUVrsw862Vkq1bGgfeV8LUf0bj5SpjTV5QBvOCdS/p6a+SXMhdvWOoaObI/4eBBw4EjJQdOW657dZul63JMe4adthk+k/DoBwfc/8EBzz9ruDJMRsPKf1jEv+ZwYvorJmPRKotrFcdfk3Pb21c4/KoOsjKldgN04Nh7IrL+0ZqrD0euPjdjuAmDsWE7wFaA7RA3J4Zf9hr+xUeDbr5S5vIVaQAAt1rT91b/RduYmxcdx5ZyOXZg0Zi1g5Hr78y44c41Vq8r6KwGXNZhNgwMn1ee+dCUR/9kyPZTBuMtvY6SL9bsu81w+p5Vjt3WIVmdIEmNzIRiAzYerbn0gOfKI1M2LwnbE2EYUjZDpQONoYzmAxHznUUMTz2k/hUFb3vFGgDAyUykI44shIMta+5IDd/XzcLnrq2Z9OixnMOnlFO3Jlz/qg79kzXGOthqcfWhikc/sMezD1fkfbj9Lcvc+EbHwnFH6SJh5tm5NOPKo4FLZ0suPx7YvSjsDiLrJYxL4ytJ7h+K/2+VxPeEKI8+5OvqlTiHr2gD+Ms5evLEyDsd8uPLmRxd6cVs7TCcuSvnNfd0OHlrSrYIPiaMrgQ2z82w3T5HTuYknW1UPNVum52zFc/cu8OzjwSuXHSs70S2fWSosA2bVan/tBPTf/8hqskrfc4+qwwA4HbrxKqmWWbuSZV3JGn8prUVXbvhhJGb78g587oua2cMeWeG+EYa3kfLZM+w+eyUzY+VbD9UcOVc5PKWcHVk2IpGx4qfev/Bwsp3VTE8+UzFZwWS+bPOAP6SQbSyk+1Yf8eC4x8d3a+9G283vPotfW58bc7CgQ5xpmw9N+Di/WMuPVSx85yysaFcmggbpbATpRqr/LoX989D9I89Wvvqs2l+7Ge7Aaz7sHdQ9A99cE+XU97g90LfjiJxEql3HNuP15z/0B7rD3g2n1EubwgXZrBZSTkM8myp5junQf+3R3x9aTPGzzoyymf9CfBCite2pBWLg13Rd59YlXtOHzXs7ztcbRhuB67uBK5MhUveshHrwvv4Axb52RpT3x/CZy1x5W+NAVwbb3LmQDs3v3awzz2rzpB5qErDlTJWl+twdUL6mxPq/1ir//Djn0FFm78zgJczWsjsgYzwtbnK1+ZRl0KQc5XIT06Eez8c4uBv01z8rTSAa+O1DpcrEgPxv0Pg78bfjb9t4/8F21epgd5Vf1EAAAAASUVORK5CYII='
// for testing used peTOASTY icon
      },
    "bb_s":{name:"Scheduled BB"}
  }
}

/* exported setup */
