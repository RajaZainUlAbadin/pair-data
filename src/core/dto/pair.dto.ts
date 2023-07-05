
export class responseDto {
    data: pairDto[];
}

export class pairDto {
    id: string; 
    token0: tokenDto;
    token1: tokenDto;
}

export class tokenDto {
    id: string;
}