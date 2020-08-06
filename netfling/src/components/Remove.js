removeChoice = id => {
    // Filter this.state.shows for shows with an id not equal to the id being removed
    const shows = this.state.shows.filter(show => show.id !== id);
    // Set this.state.shows equal to the new shows array
    this.setState({ shows });
  };