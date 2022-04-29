-- CreateTable
CREATE TABLE "Setor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ramal" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nivel_acesso" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "primeiro_acesso" BOOLEAN NOT NULL,
    "campus" TEXT NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chamado" (
    "id" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tombo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "avaliacao" TEXT NOT NULL,
    "setorId" TEXT NOT NULL,
    "funcionarioId" TEXT NOT NULL,

    CONSTRAINT "Chamado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuncionarioOnSetor" (
    "setorId" TEXT NOT NULL,
    "funcionarioId" TEXT NOT NULL,

    CONSTRAINT "FuncionarioOnSetor_pkey" PRIMARY KEY ("setorId","funcionarioId")
);

-- AddForeignKey
ALTER TABLE "Chamado" ADD CONSTRAINT "Chamado_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "Setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chamado" ADD CONSTRAINT "Chamado_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuncionarioOnSetor" ADD CONSTRAINT "FuncionarioOnSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "Setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuncionarioOnSetor" ADD CONSTRAINT "FuncionarioOnSetor_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
