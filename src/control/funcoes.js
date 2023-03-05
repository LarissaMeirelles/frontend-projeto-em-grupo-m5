const createPost = async (e) => {
    e.preventDefault();
    const post = { nome, autor_a, pais, lancamento, editora, genero, total_de_paginas, valor ,capa};
    await blogFetch.post("/Livro", post);
    navigate("/catalogo");
  };

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/Livro/${id}`);

      const data = response.data;

      setNome(data.nome);
      setAutor(data.autor_a);
      setPais(data.pais);
      setLancamento(data.lancamento);
      setEditora(data.editora);
      setPaginas(data.total_de_paginas);
      setValor(data.valor);
      setGenero(data.genero);
      setCapa(data.capa);
    } catch (error) {
      console.log(error);
    }
  };

  const editarProduto = async (e) => {
    e.preventDefault();

    const post = { nome, autor_a, pais, lancamento, editora, genero, total_de_paginas, valor, capa };


    await blogFetch.put(`/Livro/${id}`, post);

    navigate("/catalogo");
  };



  <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Digite um título para a despesa" onChange={(event) => setTitulo(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Selecione uma categoria</Form.Label>
                    <Form.Select controlId="categoria" onChange={(event) => setCategoria(event.target.value)}>
                        <option value="moradia">Moradia</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="saude">Saúde</option>
                        <option value="transporte">Transporte</option>
                        <option value="lazer">Lazer</option>
                        <option value="lazer">Despesas pessoais</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="valor">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="number" placeholder="Digite o valor" onChange={(event) => setValor(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="descricaor">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Descrição" onChange={(event) => setDescricao(event.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

